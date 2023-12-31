import { useState } from "react";
import styles from "./FilterPanel.module.scss";
import { CountryCode, countries } from "../../types";

interface FilterPanelProps {
  onChange: (options: CountryCode[]) => void;
}

export const FilterPanel = ({ onChange }: FilterPanelProps) => {
  const [selectedTags, setSelectedTags] = useState<CountryCode[]>([]);

  const handleTagClick = (countryCode: CountryCode) => {
    setSelectedTags((prev) => {
      const updatedSelectedTags = [...prev];
      const index = updatedSelectedTags.indexOf(countryCode);
      if (index > -1) {
        updatedSelectedTags.splice(index, 1);
      } else {
        updatedSelectedTags.push(countryCode);
      }
      onChange(updatedSelectedTags);

      return updatedSelectedTags;
    });
  };

  return (
    <div>
      <div className={styles.tagsContainer}>
        {countries.map((country) => (
          <div
            key={country.code}
            className={`${styles.tag} ${
              selectedTags.includes(country.code) ? styles.selected : ""
            }`}
            onClick={() => handleTagClick(country.code)}
          >
            {country.name}
          </div>
        ))}
      </div>
    </div>
  );
};
