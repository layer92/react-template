import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageRoutesMap } from '../routing/PageRoutesMap';
import { ThemeContextProvider } from '../theme/ThemeContext';
import { TranslationContextProvider } from '../translation/TranslationContext';

function App() {
    let app = <Routes>
        {Object.entries(PageRoutesMap).map(([path,Page])=>
            <Route path={path} key={path} element={<Page/>}/>
        )}
    </Routes>;

    app = <TranslationContextProvider>{app}</TranslationContextProvider>;
	app = <ThemeContextProvider>{app}</ThemeContextProvider>;
    app = <BrowserRouter>{app}</BrowserRouter>;

    return app;
}

export default App;
