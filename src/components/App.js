import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import TaskTimeline from './task/TaskTimeline';

const App = () => (
        <div className="app">
            <Navigation />
            <Sidebar />
            <TaskTimeline />
        </div>
)

export default App;