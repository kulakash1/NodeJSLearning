const fullName = (user) => user.firstName + " " + user.lastName;
      const user = { firstName: "Akash ", lastName: "Kulshrestha" };
      
      const element = (
      <div>
        <h1 className="greeting">Hello, {fullName(user)}!</h1>
        <p>Good to see you here.</p>
      </div>
    );

      const rootElement = document.getElementById("root");
      ReactDOM.render(element,rootElement);