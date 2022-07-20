const PageHeader = props => {
  const { title, subTitle } = props
  return (
    <div className="center my-2">
        <div className="col-12 col-md-8">
            <h1 className="col-12 text-center display-4">{title}</h1>
            <h2 className="fs-5">{subTitle}</h2>
        </div>
    </div>
  );
};

export default PageHeader;