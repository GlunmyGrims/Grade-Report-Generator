# Grade Report Generator

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![roadmap.sh](https://img.shields.io/badge/roadmap.sh-Project%20Idea-blue?style=for-the-badge&logo=roadmapdotsh)](https://roadmap.sh/projects/js-grade-report-generator)

A lightweight, modular, and efficient tool to generate academic grade reports in JavaScript. Designed to seamlessly process anything from a single student to thousands, it delivers a clean, structured object containing all essential student information straight to the point.

---

## 🚀 Features

- **High Performance & Scalability:** Lightweight and optimized to process large batches of grades without performance drops or unnecessary overhead.
- **Modular Architecture:** Built with independent utilities that make it easy to adapt, maintain, and integrate into any workflow.
- **Full Customization:** Straightforward and transparent logic, making it easy to adjust grading criteria to fit your needs.
- **Clean Code:** Designed with readability and maintainability in mind.

---

## 🛠️ Technologies Used

- **Vanilla JavaScript (ES6+):** Chosen for its simplicity, flexibility, zero-overhead performance, and universal compatibility.

---

## 🧠 Challenges Overcome

- **Mastering Functions & Return Values:** Successfully unifying independent utility functions and understanding the flow of the `return` keyword.
- **Complex Conditional Logic:** Implementing multi-branched condition trees cleanly and efficiently to evaluate scores accurately.

---

## 💻 How to Use

1. Clone or download the source code into your project directory.
2. Import the main function or individual utilities into your module.

### Example Usage

```javascript
function createGradeReport(name, score){
    let feed = getFeedback(getLetterGrade(score))

    let result = {
        name: name,
        score: score,
        grade: getLetterGrade(score),
        passed: hasPassed(score),
        feedback: feed,
    };


    return result;
}

// Example execution
console.log(createGradeReport('Ava', 92));

/*
Output:
{
  name: 'Ava',
  score: 92,
  grade: 'A',
  passed: true,
  feedback: 'Outstanding!'
}
*/
```

---

## License

This project is licensed under the MIT License.

## Links & Resources

- **Roadmap Project Specification:** [JavaScript Grade Report Generator](https://roadmap.sh/projects/js-grade-report-generator)