import React, { useState } from 'react';
import Modal from './Modal'; 

function CustomPage() {
  const [isSurveyOpen, setSurveyOpen] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [depressionScore, setDepressionScore] = useState(0);
  const [anxietyScore, setAnxietyScore] = useState(0);

  const questions = [
    "In the past month, have you often felt down, depressed, or hopeless?",
    "Do you often find yourself feeling excessively anxious, worried, or nervous?",
    "Do you find it difficult to fall asleep or stay asleep because you can't stop thinking about things?",
    "Do you feel a lack of purpose as a missionary?",
  ];

  const handleAnswer = (score) => {
    if (currentQuestionIndex === 0 || currentQuestionIndex === 3) {
      setDepressionScore(depressionScore + score);
    } else if (currentQuestionIndex === 1 || currentQuestionIndex === 2) {
      setAnxietyScore(anxietyScore + score);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSurveyOpen(false);
      // Process and display overall score
      const overallScore = depressionScore + anxietyScore;
      console.log(`Depression Score: ${depressionScore}, Anxiety Score: ${anxietyScore}, Overall Score: ${overallScore}`);
      // You can use overallScore to display relevant resources
    }
  };

  const renderResources = () => {
    let title = '';
    let links = [];
  
    if (depressionScore > anxietyScore + 1) {
      title = 'Depression Resources';
      links = [
        { href: "https://www.lds.org/ensign/2016/02/depression?lang=eng", text: "Understanding Depression" },
        { href: "https://www.lds.org/church/news/depression-more-than-a-bad-hair-day?lang=eng", text: "More Than a Bad Hair Day" }
      ];
    } else if (anxietyScore > depressionScore + 1) {
      title = 'Anxiety Resources';
      links = [
        { href: "https://www.lds.org/ensign/2000/03/escaping-my-valley-of-sorrow?lang=eng&_r=1", text: "Escaping My Valley of Sorrow" },
        { href: "https://www.lds.org/ensign/1990/09/keeping-mentally-well?lang=eng&_r=1", text: "Keeping Mentally Well" }
      ];
    } else {
      title = 'General Mental Health Resources';
      links = [
        { href: "https://www.lds.org/ensign/2001/10/easing-the-burdens-of-mental-illness?lang=eng&_r=1", text: "Easing the Burdens of Mental Illness" },
        { href: "https://www.lds.org/ensign/1989/02/mental-illness-in-search-of-understanding-and-hope?lang=eng&_r=1", text: "In Search of Understanding and Hope" }
      ];
    }
  
    return (
      <div className="mt-4">
        <h3 className="mb-3">{title}</h3>
        <ul className="list-group">
          {links.map(link => (
            <li className="list-group-item">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary">{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

  return (
    <div>
      Custom Page Content
      <Modal isOpen={isSurveyOpen} onClose={() => setSurveyOpen(false)}>
        <div>{questions[currentQuestionIndex]}</div>
        <div className="mt-3">
        {[1, 2, 3, 4, 5].map((score) => (
            <button 
              key={score} 
              onClick={() => handleAnswer(score)}
              className="btn btn-outline-primary me-2"
            >
              {score}
            </button>
          ))}
        </div>
      </Modal>
      {!isSurveyOpen && renderResources()}
    </div>
  );
}

export default CustomPage;

// Depression: https://www.lds.org/ensign/2016/02/depression?lang=eng
              // https://www.lds.org/church/news/depression-more-than-a-bad-hair-day?lang=eng
         // anxiety: https://www.lds.org/ensign/2000/03/escaping-my-valley-of-sorrow?lang=eng&_r=1
              // https://www.lds.org/ensign/1990/09/keeping-mentally-well?lang=eng&_r=1

              //general: https://www.lds.org/ensign/2001/10/easing-the-burdens-of-mental-illness?lang=eng&_r=1
              // https://www.lds.org/ensign/1989/02/mental-illness-in-search-of-understanding-and-hope?lang=eng&_r=1