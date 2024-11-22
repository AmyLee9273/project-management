const projects = [
    { code: "2024-KFW-온산-ONS-375MW-EPC입찰", name: "온산 ONS", status: "진행 중", detailPage: "project-detail/2024-KFW-온산-ONS-375MW.html" },
    { code: "2023-이터닉스-풍백-육풍-50MW-EPC수행", name: "풍백 육풍", status: "완료" },
    { code: "2024-수협-미정-태양광-5MW-EPC입찰", name: "수협 미정 태양광", status: "계획 중" },
    { code: "2024-인스파이어-인천-태양광-10MW-EPC입찰", name: "인천 인스파이어 태양광", status: "입찰 준비" },
    { code: "2024-강동그린-경주강동-연료전지-xxMW-EPC수행", name: "강동그린에너지 연료전지", status: "EPC 수행 중" },
    { code: "2024-KYGP-경주-육풍-50MW-개발", name: "금양그린경주풍력", status: "개발 중" },
    { code: "2024-KYGP-포항-육풍-150MW-발전허가", name: "금양포항풍력", status: "발전허가 중" },
    { code: "2024-KYGP-삼척어리-육풍-31MW-발전허가", name: "삼척 어리풍력", status: "발전허가 중" },
    { code: "2024-KYGP-삼척용연-육풍-31MW-발전허가", name: "삼척 용연풍력", status: "발전허가 중" },
    { code: "2024-KYGP-삼척판문-육풍-31MW-발전허가", name: "삼척 판문풍력", status: "발전허가 중" },
    { code: "2024-KYGP-제주마을1-육풍-2MW-EPC수행", name: "제주마을1 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주마을2-육풍-2MW-EPC수행", name: "제주마을2 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주마을3-육풍-2MW-EPC수행", name: "제주마을3 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주마을4-육풍-2MW-EPC수행", name: "제주마을4 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주마을5-육풍-2MW-EPC수행", name: "제주마을5 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주마을6-육풍-2MW-EPC수행", name: "제주마을6 육풍", status: "EPC 수행 중" },
    { code: "2024-KYGP-제주수망-태양광-xxMW-EPC수행", name: "제주 수망 태양광", status: "EPC 수행 중" },
    { code: "2024-KYGP-오마해도리1-태양광-31MW-개발", name: "오마 해도리 태양광 1단계", status: "개발 중" },
    { code: "2024-KYGP-오마해도리2-태양광-40MW-개발", name: "오마 해도리 태양광 2단계", status: "개발 중" },
    { code: "2024-금양그린-보은-연료전지 -19.8MW-EPC완료", name: "보은 연료전지 1단계", status: "EPC 완료" },
    { code: "2024-금양그린-보은-연료전지 -32MW-발전허가", name: "보은 연료전지 2단계", status: "발전허가 중" }
];

const tableBody = document.querySelector("#projectTable tbody");

projects.forEach(project => {
    const row = document.createElement("tr");

    // 프로젝트 코드
    const codeCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = project.detailPage;
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
