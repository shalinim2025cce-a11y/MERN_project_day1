
import './App.css';

function App() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">✦ PulseWorks AI</h2>

        <ul className="sidebar-menu">
          <li className="active">▦ Dashboard</li>
          <li>▣ Projects</li>
          <li>☑ Tasks</li>
          <li>♙ Team</li>
          <li>▤ Reports</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* NAVBAR */}
        <header className="navbar">

          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
            />
          </div>

          <div className="nav-actions">
            <button className="nav-button">🔔</button>
            <button className="nav-button">⚙️</button>

            <div className="profile">
              <span>👤</span>
              <span>Shalini</span>
            </div>
          </div>

        </header>

        {/* WELCOME SECTION */}
        <section className="welcome">
          <h1>Welcome back, Shalini! 👋</h1>
          <p>Here's what's happening at PulseWorks AI today.</p>
        </section>

        {/* STATISTICS CARDS */}
        <section className="stats">

          <div className="stat-card">
            <span className="stat-icon purple">📁</span>
            <div>
              <p>Total Projects</p>
              <h2>24</h2>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon blue">📋</span>
            <div>
              <p>Tasks Done</p>
              <h2>1,248</h2>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon green">👥</span>
            <div>
              <p>Active Members</p>
              <h2>18</h2>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon yellow">🕒</span>
            <div>
              <p>Pending Tasks</p>
              <h2>06</h2>
            </div>
          </div>

        </section>

        {/* RECENT TASKS AND ACTIVE PROJECTS */}
        <section className="content-section">

          {/* RECENT TASKS */}
          <div className="panel">
            <h3>Recent Tasks</h3>

            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Project</th>
                  <th>Assignee</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Design Dashboard</td>
                  <td>Pulse Landing</td>
                  <td>Alex</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>

                <tr>
                  <td>Update Website</td>
                  <td>Website Redesign</td>
                  <td>John</td>
                  <td>
                    <span className="progress">In Progress</span>
                  </td>
                </tr>

                <tr>
                  <td>Create Analytics</td>
                  <td>Mobile App</td>
                  <td>Sarah</td>
                  <td>
                    <span className="pending">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>Testing API</td>
                  <td>AI Platform</td>
                  <td>David</td>
                  <td>
                    <span className="progress">In Progress</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ACTIVE PROJECTS */}
          <div className="panel projects">
            <h3>Active Projects</h3>

            <div className="project-item">
              <span>🟣</span>
              <div>
                <h4>Website Landing</h4>
                <p>5 members</p>
              </div>
              <span className="completed">Active</span>
            </div>

            <div className="project-item">
              <span>🔵</span>
              <div>
                <h4>Research & Development</h4>
                <p>4 members</p>
              </div>
              <span className="completed">Active</span>
            </div>

            <div className="project-item">
              <span>🟠</span>
              <div>
                <h4>Mobile App</h4>
                <p>3 members</p>
              </div>
              <span className="pending">On Hold</span>
            </div>

            <div className="project-item">
              <span>🟢</span>
              <div>
                <h4>AI Dashboard</h4>
                <p>6 members</p>
              </div>
              <span className="completed">Active</span>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
