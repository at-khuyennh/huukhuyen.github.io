var calendars={};$(document).ready(function(){console.info("Welcome to the CLNDR demo. Click around on the calendars andthe console will log different events that fire.");var n=moment().format("YYYY-MM"),e=[{title:"Multi-Day Event",endDate:n+"-14",startDate:n+"-10"},{endDate:n+"-23",startDate:n+"-21",title:"Another Multi-Day Event"},{date:n+"-27",title:"Single Day Event"}];calendars.clndr1=$(".cal1").clndr({events:e,clickEvents:{click:function(n){console.log("Cal-1 clicked: ",n)},today:function(){console.log("Cal-1 today")},nextMonth:function(){console.log("Cal-1 next month")},previousMonth:function(){console.log("Cal-1 previous month")},onMonthChange:function(){console.log("Cal-1 month changed")},nextYear:function(){console.log("Cal-1 next year")},previousYear:function(){console.log("Cal-1 previous year")},onYearChange:function(){console.log("Cal-1 year changed")},nextInterval:function(){console.log("Cal-1 next interval")},previousInterval:function(){console.log("Cal-1 previous interval")},onIntervalChange:function(){console.log("Cal-1 interval changed")}},multiDayEvents:{singleDay:"date",endDate:"endDate",startDate:"startDate"},showAdjacentMonths:!0,adjacentDaysChangeMonth:!1}),calendars.clndr2=$(".cal2").clndr({lengthOfTime:{days:14,interval:7},events:e,multiDayEvents:{singleDay:"date",endDate:"endDate",startDate:"startDate"},template:$("#template-calendar").html(),clickEvents:{click:function(n){console.log("Cal-2 clicked: ",n)},nextInterval:function(){console.log("Cal-2 next interval")},previousInterval:function(){console.log("Cal-2 previous interval")},onIntervalChange:function(){console.log("Cal-2 interval changed")}}}),calendars.clndr3=$(".cal3").clndr({lengthOfTime:{months:2,interval:1},events:e,multiDayEvents:{endDate:"endDate",startDate:"startDate"},clickEvents:{click:function(n){console.log("Cal-3 clicked: ",n)},nextInterval:function(){console.log("Cal-3 next interval")},previousInterval:function(){console.log("Cal-3 previous interval")},onIntervalChange:function(){console.log("Cal-3 interval changed")}},template:$("#template-calendar-months").html()}),$(document).keydown(function(n){37==n.keyCode&&(calendars.clndr1.back(),calendars.clndr2.back(),calendars.clndr3.back()),39==n.keyCode&&(calendars.clndr1.forward(),calendars.clndr2.forward(),calendars.clndr3.forward())})});