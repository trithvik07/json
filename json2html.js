export default function json2html(data) {
    // Start the HTML table with the data-user attribute
    let html = '<table data-user="rithvikthonukunuri@gmail.com">';
    
    // Collect table headers by combining keys from all objects
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
    
    // Add the table header row
    html += <thead><tr>${headers.map(header => `<th>${header}</th>).join('')}</tr></thead>`;
    
    // Add the table body with rows
    html += <tbody>;
    data.forEach(row => {
        html += <tr>${headers.map(header => `<td>${row[header] ?? ''}</td>).join('')}</tr>`;
    });
    html += </tbody></table>;
    
    // Return the generated HTML table as a string
    return html;
}
