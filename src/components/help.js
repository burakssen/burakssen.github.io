export const getHelp = () => {
  return (
    <div>
      Available commands:
      <table style={{ paddingLeft: "5vh" }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "35vh" }}>help</td>
            <td>Shows this help message</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>neofetch</td>
            <td>Shows information about me 😁</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>resume</td>
            <td>Downloads my resume</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>clear</td>
            <td>Clears the screen</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>contact</td>
            <td>Shows contact information</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>education</td>
            <td>Shows education information</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>experience</td>
            <td>Shows professional experience information</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>projects</td>
            <td>Shows projects information</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>organizations</td>
            <td>Shows organizations information</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>echo</td>
            <td>Echos the given string</td>
          </tr>
        </tbody>
      </table>
      <br />
      Depracated: Available demos: (more work will be done for this. I need to handle small screen devices and I think currently demos has some bugs. I will fix them soon.)
      <table style={{ paddingLeft: "5vh" }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "35vh" }}>gameoflife</td>
            <td>Opens the Conway's Game of Life 🕹️</td>
          </tr>
          <tr>
            <td style={{ width: "35vh" }}>sudoku</td>
            <td>Opens the Sudoku 🧩</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
