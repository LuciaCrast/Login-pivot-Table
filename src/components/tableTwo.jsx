import data from "../services/data.json";

function TableTwo() {
  const renderResults = data.map((result) => (
    <tr className="table__row" key={result.user}>
      <td className="table__cell">{result.user}</td>
      <td className="table__cell">{result.totalMoney}</td>
      <td className="table__cell">{result.totalDownloads}</td>
      <td className="table__cell">{result.date}</td>
      <td className="table__cell">{result.likes}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__cell ">
            Usuario/a <i className="fas fa-user-circle"></i>
          </th>
          <th className="table__cell">
            Total Ganancias <i className="fas fa-coins"></i>
          </th>
          <th className="table__cell">
            Total Descargas <i className="fas fa-cloud-download-alt"></i>
          </th>
          <th className="table__cell">
            Fecha <i className="fas fa-calendar-alt"></i>
          </th>
          <th className="table__cell">
            Likes <i className="fas fa-thumbs-up"></i>
          </th>
        </tr>
      </thead>
      <tbody className="table__body">{renderResults}</tbody>
    </table>
  );
}

export { TableTwo };
