export const Container = ({ children }) => {
    return <div>
        <p>antes</p>
        {children}
        <p>depois</p>
        </div>;
};