import React from "react";
import FlightSearch from "../../common/FlightSearch/FlightSearch";
import SingleTicketBox from "../../common/SingleTicketBox/SingleTicketBox";
import { useSearchTicketMutation } from "../../services/ticketApi";
import { useLocation, useNavigate } from "react-router-dom";


export default function DsiplayTicket(){
    const location = useLocation();
    const ticketsData = location.state && location.state.tickets;
    const {data} = useSearchTicketMutation();
const navigate= useNavigate()
    /*
    Note for Ticket info display: 
        1. use loader or a way to get info from the backend api endpoint
        2. feel free to adjust what to be display on the ticket, for example only keep the things we need, like depart time and price and delete others
        3. use a for loop in the return statement to display all the ticket info (but there are other ways to do it, feel free to choose other ways)
        4. the SingleTicketBox can receive parameters and can be replaced easily with other things
    */
    return(
        <>
        <div className="m-5" style={{height:"80vh"}}>
            {/* <div id="search-flight" className="border rounded py-3">
                <FlightSearch/>
            </div> */}
            <div 
            style={{background:"#232D3F", color:"white", fontFamily:"Raleway" }} 
            className="rounded mt-3 d-flex justify-content-center py-4">
                <svg fill="#ffffff" width="64px" height="25px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"></path> </g></svg>
                Discover new horizons; take flight to unforgettable travel adventures!
            </div>

            <h1 className="mt-3" style={{fontFamily:"Oswald"}}>
                Recommended Ticket
            </h1>

            {ticketsData?.map((data, i)=>(
                <SingleTicketBox key={i} data={data}/>
            ))}
            {
                ticketsData?.length === 0 || ticketsData === null &&
                <div className="d-flex justify-content-center gap-2 mt-4">
                    <p>No data available</p> <span className="text-primary" onClick={()=>navigate('/')}> Search some!</span>
                </div>
            }
        </div>
        </>
    )
}