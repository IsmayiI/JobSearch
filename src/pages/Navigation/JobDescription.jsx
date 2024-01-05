import { useContext } from 'react';
import styles from './JobDescription.module.css'
import CompaniesContext from '../../context/CompaniesContext';


function formatText(inputText) {
   const sentences = inputText.split(';');
   const formattedSentences = sentences
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0)
      .map(sentence => {
         const prefix = sentence.startsWith('-') ? '' : ' ';
         return `${prefix}- ${sentence}`;
      });

   const formattedText = formattedSentences.join(';\n');

   return formattedText;
}

const JobDescription = () => {

   const { vacancy } = useContext(CompaniesContext)
   const { demands, info, condition } = vacancy

   return (
      <div className={styles.description}>
         {info &&
            <>
               <h4>Responsibilities:</h4>
               <p>
                  {formatText(info)}
               </p>
            </>}
         {demands &&
            <>
               <h4>Requirements:</h4>
               <p>
                  {formatText(demands)}
               </p>
            </>}
         {condition &&
            <>
               <h4>Working conditions:</h4>
               <p>
                  {formatText(condition)}
               </p>
            </>}

      </div>
   )
}

export default JobDescription