import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;
