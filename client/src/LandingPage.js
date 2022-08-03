import React from "react";
import Board from "./Board";
function LandingPage() {
  return (
    // <div style={{ backgroundColor: "rgb(239 68 68)" }}>
    //   <h1>Landing</h1>
    //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //     Button
    //   </button>
    // </div>
    <>
      <div className="lg:px-6 xl:px-8">
        <div className="mx-auto container relative z-0 px-4 xl:px-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-3/5 md:pt-24 pb-10 lg:pb-20 xl:pb-48">
              <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color ">
                ChessBuddy
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-6 text-primary font-medium text-lg lg:text-2xl">
                A collection of over 10,000 master games
              </h2>
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Log In
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sign Up
              </button>
              {/* <div className="w-full flex justify-center md:justify-start">
                <Switch>
                  <Route path="/signup">
                    <NewUserForm
                      existingUsers={existingUsers}
                      postNewUser={postNewUser}
                      handleLogin={handleLogin}
                    />
                  </Route>
                  <Route exact path="/">
                    <LoginForm
                      existingUsers={existingUsers}
                      handleLogin={handleLogin}
                      fetchUserFavoriteArtworks={fetchUserFavoriteArtworks}
                    />
                  </Route>
                </Switch>
              </div> */}
            </div>
            <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
              {/* <img
                width="500"
                className="md:absolute md:w-1/2 md:-ml-28"
                // src={loadImageUrl}
                src="https://static01.nyt.com/images/2020/05/16/business/16JORDAN-01sub/16JORDAN-01sub-mediumSquareAt3X.jpg"
                alt="Art from our collection"
              /> */}
              <Board />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
