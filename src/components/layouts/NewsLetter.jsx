import React, { useEffect, useState } from 'react';
export const NewsLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNewsLetter = () => {
    let openModal = setTimeout(() => setIsOpen(true), 3000);
  };

  const closeNewsLetter = () => {
    sessionStorage.setItem('showNewsLetter', 'false');
    setIsOpen(false);
  };

  useEffect(() => {
    sessionStorage.showNewsLetter === 'false'
      ? closeNewsLetter()
      : showNewsLetter();
  }, []);

  return (
    <React.Fragment>
      <div
        className={`modal position-fixed modal-signin d-block py-5 ${
          isOpen ? 'd-flex' : 'd-none'
        }`}
        tabIndex={-1}
        role="dialog"
        id="modalSignin"
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0">Sign up NewsLetter</h2>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeNewsLetter()}
              />
            </div>
            <div className="modal-body p-5 pt-0">
              <p className="small">
                Get latest petition email directly to your email{' '}
              </p>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
