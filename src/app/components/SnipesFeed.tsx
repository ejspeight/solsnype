// import { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { formatDistanceToNow } from "date-fns";
// import { io } from "socket.io-client";

// const SOCKET_URL = "wss://your-backend-url.com"; 

// export default function SnipesFeed() {
//   const [snipes, setSnipes] = useState([]);

//   useEffect(() => {
//     const socket = io(SOCKET_URL);
    
//     socket.on("new_snipe", (snipe) => {
//       setSnipes((prevSnipes) => [snipe, ...prevSnipes]);
//     });
    
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Live Snipes</h2>
//       <div className="grid gap-4">
//         {snipes.length === 0 && <p>No snipes yet...</p>}
//         {snipes.map((snipe, index) => (
//           <Card key={index} className="p-4 border border-gray-700 rounded-lg">
//             <CardContent>
//               <div className="flex justify-between">
//                 <div>
//                   <h3 className="font-bold text-lg">{snipe.tokenSymbol} ({snipe.tokenName})</h3>
//                   <p className="text-gray-400 text-sm">{snipe.tokenAddress}</p>
//                 </div>
//                 <span className="text-xs text-gray-400">
//                   {formatDistanceToNow(new Date(snipe.timestamp), { addSuffix: true })}
//                 </span>
//               </div>
//               <div className="mt-2 text-sm">
//                 <p><strong>Buy Price:</strong> {snipe.buyPrice} SOL</p>
//                 <p><strong>Liquidity:</strong> {snipe.liquidity} SOL</p>
//                 <p><strong>Risk:</strong> {snipe.riskRating}</p>
//                 <p><strong>Status:</strong> {snipe.status}</p>
//                 <p><strong>Profit/Loss:</strong> {snipe.profitLoss}%</p>
//               </div>
//               <div className="mt-2 flex gap-2">
//                 <a href={`https://solscan.io/tx/${snipe.txHash}`} target="_blank" className="text-blue-400 underline">View Transaction</a>
//                 <a href={`https://solscan.io/token/${snipe.tokenAddress}`} target="_blank" className="text-blue-400 underline">View Token</a>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
