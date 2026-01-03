// Exam data with Computer Repair unit added
const exams = [
  { id: 1, course: 'CS101', title: 'Intro to Programming', year: '2025 Sem 1', lecturer: 'Mr. Calvins', file: 'cs101.pdf' },
  { id: 2, course: 'Networking', title: 'Data Communication And Networking', year: '2024 Sem 2', lecturer: 'Mr.Steve', file: 'Networking.pdf' },
  { id: 3, course: 'CRM301', title: 'Computer Repair and Maintenance', year: '2025 Sem 1', lecturer: 'Mr. Okoth', file: 'crm301.pdf' },
  { id: 4, course: 'WEB302', title: 'Web Development', year: '2025 Sem 1', lecturer: 'Madam Apiyo', file: 'web302.pdf' }
];

// Rest of the code stays exactly the same...
function loadExams() {
  const container = document.getElementById('examsList');
  container.innerHTML = '';
  exams.forEach(exam => {
    const card = `
      <div class="exam-card">
        <h3>${exam.course} - ${exam.title}</h3>
        <p>Year: ${exam.year} | Lecturer: ${exam.lecturer}</p>
        <div class="exam-actions">
          <a href="#" class="download-link" onclick="downloadExam(${exam.id})">Download PDF</a>
          <a href="#" class="recovery-link" onclick="requestRecovery(${exam.id})">Request Recovery</a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function searchExams() {
  const query = document.getElementById('examSearch').value.toLowerCase();
  const filtered = exams.filter(exam => 
    exam.course.toLowerCase().includes(query) ||
    exam.title.toLowerCase().includes(query) ||
    exam.year.toLowerCase().includes(query)
  );
  // Simple reload for demo
  loadExams();
}

function downloadExam(id) {
  alert(`Downloading Computer Repair exam ${id}...`);
}

function requestRecovery(id) {
  alert(`Recovery request for exam ${id} sent to admin!`);
}

function logout() {
  window.location.href = 'login.html';
}

loadExams();
5505