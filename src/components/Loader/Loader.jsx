import { RingLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <>
      <RingLoader
        color="#383fb8"
        loading={loading}
        size="80px"
        speedMultiplier={1.5}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
          marginBottom: '20px',
        }}
      />
    </>
  );
};

export default Loader;
