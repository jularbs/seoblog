import Header from './Header';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
                <div className="mx-auto" style={{maxWidth:"1600px"}}>
                    {children}
                </div>
        </React.Fragment>
    );
};

export default Layout;