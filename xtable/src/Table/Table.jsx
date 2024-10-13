import React from "react";
import { useState } from "react";
const tableData=
[
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }

]


const Table=()=>{
    const[tData,setTData]=useState(tableData);
    const[sortedDates,setSortedDates]=useState(tableData);
    const sortByDate=()=>{
        const dates=[...tData].sort((a,b)=>new Date(b.date)-new Date(a.date))
        setSortedDates(dates);
    }
    const sortByViews=()=>{
        const views=[...tData].sort((a,b)=>b.views-a.views)
        setSortedDates(views);
    }
    return(<>
    <button onClick={sortByDate}>Sort by Date</button>
    <button onClick={sortByViews}>Sort by Views</button>

    <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
            {sortedDates.map((table,index)=> (<tr key={index}>
                           <td>{table.date}</td>
                           <td>{table.views}</td>
                           <td>{table.article}</td>
                           </tr>)
            )}
           
        </tbody>
    </table>
    </>)
}
export default Table;