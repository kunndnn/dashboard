import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmallDemo } from './components/SmallDemo';
import { MediumDemo } from './components/MediumDemo';
import { LargeDemo } from './components/LargeDemo';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/small" element={<SmallDemo />} />
                    <Route path="/medium" element={<MediumDemo />} />
                    <Route path="/large" element={<LargeDemo />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
