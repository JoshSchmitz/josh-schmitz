import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import RingLoader from 'react-spinners/RingLoader';
import Leadership from './Leadership';

// import state
import { useGetLeadershipQuery } from '../../store/slices/resume/api-leadership';
import { useEffect, useState } from 'react';

const Leaderships = ({ resumeId, userId, highlight }) => {
  // state
  const {
    data: leaderships,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadershipQuery({ resumeId });
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function displayHighlighted() {
      if (leaderships) {
        const leads = leaderships.filter((e) => e.highlighted === true);
        if (leads.length === 0) {
          setLeads(
            leaderships
              .sort((a, b) => dayjs(b.endDate) - dayjs(a.endDate))
              .slice(0, 1)
          );
        } else {
          setLeads(leads);
        }
      }
    }
    async function displayFull() {
      if (leaderships) {
        setLeads(leaderships.sort((a, b) => dayjs(b.date) - dayjs(a.date)));
      }
    }

    if (highlight) {
      displayHighlighted();
    } else {
      displayFull();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderships]);

  return (
    <div className='leaderships'>
      {isLoading && (
        <RingLoader className='loader-page' loading={isLoading} size={50} />
      )}
      {isError && <h1>Error: {error}</h1>}
      {isSuccess &&
        leads.map((lead) => {
          return (
            <Leadership
              key={lead._id}
              leadership={lead}
              resume={resumeId}
              user={userId}
            />
          );
        })}
    </div>
  );
};
Leaderships.propTypes = {
  resumeId: PropTypes.string.isRequired,
  userId: PropTypes.string,
  highlight: PropTypes.bool,
};

export default Leaderships;
