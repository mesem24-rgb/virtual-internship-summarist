const SelectedBookSkeleton = () => {
  return (
    <section className="selected-book selected-book--skeleton">
      <div className="selected-book__content">
        <div className="skeleton skeleton-text skeleton-label"></div>
        <div className="skeleton skeleton-text skeleton-title"></div>
        <div className="skeleton skeleton-text skeleton-author"></div>
        <div className="skeleton skeleton-text skeleton-subtitle"></div>
        <div className="skeleton skeleton-text skeleton-subtitle short"></div>

        <div className="selected-book__buttons">
          <div className="btn selected-book__button skeleton skeleton-button"></div>
          <div className="btn selected-book__button skeleton skeleton-button"></div>
        </div>
      </div>

      <div className="selected-book__image-wrapper">
        <div className="skeleton skeleton-selected-image"></div>
      </div>
    </section>
  );
};

const BookCardSkeleton = () => {
  return (
    <div className="book-card">
      <div className="book-card__image-wrapper">
        <div className="skeleton skeleton-book-image"></div>
      </div>

      <div className="skeleton skeleton-text skeleton-card-title"></div>
      <div className="skeleton skeleton-text skeleton-card-author"></div>
      <div className="skeleton skeleton-text skeleton-card-subtitle"></div>
      <div className="skeleton skeleton-text skeleton-card-subtitle short"></div>
    </div>
  );
};

const BookRowSkeleton = ({ title = "Loading..." }) => {
  return (
    <section className="book-row">
      <h2 className="book-row__title">{title}</h2>

      <div className="book-row__cards">
        {Array.from({ length: 6 }).map((_, index) => (
          <BookCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export { SelectedBookSkeleton, BookCardSkeleton, BookRowSkeleton };