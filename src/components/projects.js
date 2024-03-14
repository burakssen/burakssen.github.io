export const getProjects = () => {
    return (
        <div style={{paddingLeft: "5vh"}}>
            <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: "35vh"}}>February 2024 - March 2024</td>
                    <td><a className="link" href="/kanban-board"><b>🔗 Kanban Board</b></a></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>A simple kanban board with add/remove/edit functionaliy</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Developed <b>a simple kanban board</b> that allows users to <b>add, remove, edit</b> and <b>drag and drop</b> tasks between columns.</li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Implemented with <b>NextJS, Framer-Motiont</b> and <b>Typescript.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Currently there is no database is hooked up. It stores its data on browser.</li></td>
                  </tr>
                  <tr>
                    <td style={{width: "35vh"}}>September 2022 - June 2022</td>
                    <td><a className="link" href="https://github.com/burakssen/ModernWarSimulator"><b>🔗 Modern War Simulator</b></a></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>A realistic tower defence type game</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Developed <b>a simulation game</b> which consist of <b>a terrain</b> and <b>units</b> that are placed on top of the terrain.</li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Terrain generation developed <b>multi threaded</b> and it is generated <b>procedurally.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li><b>PID algorithm</b> is implemented for the rockets to <b>move realistically.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Implemented with <b>Unity Game Engine, C#, C++.</b></li></td>
                  </tr>
                  <tr>
                    <td>September 2021 - January 2022</td>
                    <td><b>Business Training Platform</b></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>A training platform for companies.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Developed a <b>training platform</b> that provides <b>a professional environment for companies</b> to <b>educate their employees</b> and <b>track their improvements.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>The development process <b>was managed with a team of 4 people</b> and under the guidance of <b>DefineX Consulting Technology.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Implemented with <b>ReactJS, NodeJS, Sequelize ORM</b> and <b>PostgreSQL.</b></li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Tested with <b>Jest</b> and <b>Supertest.</b></li></td>
                  </tr>
                  <tr>
                    <td>September 2020 - January 2021</td>
                    <td><b>ITU-BE</b></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>An online education platform</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Developed an <b>education platform</b> that allows tutors to <b>publish their courses</b> in a professional environment with their students from ITU.</li></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style={{paddingLeft: "20px"}}><li>Implemented with <b>Python Flask, PostgreSQL</b> and deployed to <b>Heroku.</b></li></td>
                  </tr>
                </tbody>
            </table>
        </div>
    );
}