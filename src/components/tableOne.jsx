import data from "../services/data.json";

function TableOne() {
  const renderResults = data.map((result) => (
    <tr className="table__row" key={result.user}>
      <td className="table__cell">{result.user}</td>
      <td className="table__cell">{result.money}</td>
      <td className="table__cell">{result.downloads}</td>
    </tr>
  ));
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__cell">
            Usuario/a <i class="fas fa-user-circle"></i>
          </th>
          <th className="table__cell">
            Dinero Ganado <i class="fas fa-money-bill-wave"></i>
          </th>
          <th className="table__cell">
            Descargas <i class="fas fa-download"></i>
          </th>
        </tr>
      </thead>
      <tbody className="table__body">{renderResults}</tbody>
    </table>
  );
}

export { TableOne };
