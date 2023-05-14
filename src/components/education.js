export const getEducation = () => {
    return (<div style={{paddingLeft: "5vh"}}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width: "35vh"}}>October 2022</td>
            <td><b><a className="link" href="https://www.tum.de/">🔗 Technical University of Munich</a></b></td>
          </tr>
          <tr>
            <td>Munich, Germany</td>
            <td>Master of Science in Informatics</td>
          </tr>
          <tr>
            <td></td>
            <td style={{paddingLeft: "20px"}}><li>Have been admitted to winter semester 2022-2023</li></td>
          </tr>
          <tr>
            <td><br/></td>
          </tr>
          <tr  >
            <td>September 2017 - June 2022</td>
            <td><b><a className="link" href="https://www.itu.edu.tr/">🔗 Istanbul Technical University</a></b></td>
          </tr>
          <tr>
            <td>Istanbul, Turkey</td>
            <td>Bachelor of Science in Computer Engineering</td>
          </tr>
          <tr>
            <td></td>
            <td style={{paddingLeft: "20px"}}><li>Graduated with a <b>GPA</b> of <b>3.16/4.00</b></li></td>
          </tr>
        </tbody>
      </table>
    </div>);
}