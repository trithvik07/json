// json2html.js
export default function json2html(data) {
  // Get all unique keys from the array of objects for table headers
  const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

  // Generate the HTML table string
  let html = `<table data-user="rithvikthonukunuri@gmail.com">`;
  html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;
  
  // Generate rows
  for (const row of data) {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  }

  html += `</tbody></table>`;
  return html;
}

