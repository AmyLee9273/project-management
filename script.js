const projects = [
    { code: "2024-KFW-온산-ONS-375MW-EPC입찰", name: "온산 ONS", status: "진행 중" },
    { code: "2023-이터닉스-풍백-육풍-50MW-EPC수행", name: "풍백 육풍", status: "완료" },
    { code: "2024-수협-미정-태양광-5MW-EPC입찰", name: "수협 미정 태양광", status: "계획 중" },
];

const tableBody = document.querySelector("#projectTable tbody");

projects.forEach(project => {
    const row = document.createElement("tr");

    // 프로젝트 코드
    const codeCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = project.code;
    codeCell.appendChild(link);
    row.appendChild(codeCell);

    // 프로젝트 이름
    const nameCell = document.createElement("td");
    nameCell.textContent = project.name;
    row.appendChild(nameCell);

    // 상태
    const statusCell = document.createElement("td");
    statusCell.textContent = project.status;
    row.appendChild(statusCell);

    // 연도별 월 데이터
    for (let year = 2023; year <= 2024; year++) {
        for (let month = 1; month <= 12; month++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        }
    }

    tableBody.appendChild(row);
});
