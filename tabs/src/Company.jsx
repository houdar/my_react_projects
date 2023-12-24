import PersonJob from "./PersonJob";

const Company = ({ jobs, currentItem }) => {
  const { company, dates, duties, title } = jobs[currentItem];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <PersonJob duties={duties} />
    </article>
  );
};
export default Company;
