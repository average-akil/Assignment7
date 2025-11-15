import React, { useEffect, useState } from "react";

const PlayerCard = ({ card, addToSelected, balance, updateBalance }) => {
  const {
    id,
    name,
    image,
    country,
    role,
    batting_style,
    rating,
    price,
    action,
  } = card;

  const [click2, setClick2] = useState(false);

  return (
    <div className="pb-48">
      <div className="card bg-base-100 w-96 shadow-sm max-w-9/10  border border-slate-300/50">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-48 w-96" />
        </figure>
        <div className="card-body r text-center">
          <div className="flex gap-4">
            <svg
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5337 14.5397C16.5337 14.5397 19.8036 11.2699 19.8036 7.26985C19.8036 3.26983 16.5337 0 12.5337 0C8.53368 0 5.26392 3.26983 5.26392 7.26985C5.26392 11.2699 8.53374 14.5397 12.5337 14.5397Z"
                fill="#131313"
                fill-opacity="0.8"
              />
              <path
                d="M25.0098 20.3493C24.8193 19.8731 24.5654 19.4286 24.2797 19.0159C22.8193 16.8572 20.5654 15.4286 18.0257 15.0794C17.7083 15.0477 17.3591 15.1111 17.1051 15.3016C15.7718 16.2858 14.1845 16.7937 12.5337 16.7937C10.8828 16.7937 9.29556 16.2858 7.96221 15.3016C7.70822 15.1111 7.35901 15.0159 7.04158 15.0794C4.50189 15.4286 2.2162 16.8572 0.787638 19.0159C0.501926 19.4286 0.247933 19.9049 0.0574994 20.3493C-0.0377177 20.5398 -0.00599894 20.762 0.0892181 20.9525C0.343211 21.3969 0.660642 21.8414 0.946353 22.2223C1.39078 22.8255 1.86699 23.3652 2.40669 23.8731C2.85112 24.3175 3.35904 24.7302 3.86703 25.1429C6.37494 27.016 9.39083 28.0001 12.5019 28.0001C15.6131 28.0001 18.6289 27.0159 21.1369 25.1429C21.6448 24.762 22.1527 24.3175 22.5972 23.8731C23.1051 23.3652 23.613 22.8255 24.0575 22.2223C24.375 21.8096 24.6607 21.3969 24.9147 20.9525C25.0733 20.762 25.105 20.5397 25.0098 20.3493Z"
                fill="#131313"
                fill-opacity="0.8"
              />
            </svg>
            <h1 className="text-black font-bold">{name}</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M10.2907 1.24914C7.70781 -0.226719 4.99328 -0.364766 2.38281 0.813516V0H1.21094V20H2.38281V12.7057C4.78785 11.4443 7.31352 11.4835 9.70934 12.8524C11.1461 13.6736 12.6236 14.0838 14.1016 14.0838C15.579 14.0838 17.057 13.6735 18.4938 12.8524L18.7891 12.6836V0.747891L17.9125 1.24914C15.4199 2.67391 12.7843 2.67391 10.2907 1.24914Z"
                    fill="#131313"
                  />
                </g>
              </svg>{" "}
              <p>{country}</p>
            </div>
            <div className="text-black bg-slate-100 p-1 rounded text-xs">
              {batting_style}
            </div>
          </div>
          <hr></hr>

          {/* Rating header */}
          <h1 className="font-bold flex items-start pl-0.5">Rating</h1>

          {/* Comparison row */}

          <p className="font-bold flex justify-between">
            {batting_style}
            <span className="text-slate-400 font-medium">{batting_style}</span>
          </p>

          {/* Price + button row */}
          <div className="flex justify-between items-center gap-35">
            <p className="font-bold text-sm">Price: {price}</p>
            <button
              onClick={() => {
                addToSelected(card);
                updateBalance(Number(price));
                setClick2(1);
              }}
              disabled={click2}
              className="text-slate-300 p-1 rounded border"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
