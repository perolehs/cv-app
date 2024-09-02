import { CV } from "../types/cv-data.type";

const currentLabel = "Current";
export const BasicCV = ({
  name,
  resume,
  profession,
  experience,
  certifications,
}: CV) => {
  return (
    <div className="cv-container">
      <header>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </header>
      <main>
        {/* Short description */}
        <p>{resume}</p>
        <section>
          <h2>Experience</h2>
          <ul>
            {experience.map((exp) => (
              <li>
                <h3>
                  {exp.company} ({exp.startDate} - {exp.endDate ?? currentLabel}
                  )
                </h3>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((certification) => (
              <li>
                <p>{certification}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
