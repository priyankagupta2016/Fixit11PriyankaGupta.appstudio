let dessertList = ['Brownies','Cookies','Cake','Cupcakes','Ice Cream']


dessertVoting.onshow=function(){
    drpDesserts.clear()   
for (i = 0; i <= dessertList.length - 1; i++) 
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(){
    if (typeof(s) == "object")   
      return                    
    else {    
      drpDesserts.value = s 
      NSB.MsgBox(`You picked ${drpDesserts.selection} - that is a great choice!`)
    }
}



btnDescribeYou.onclick=function(){
  ChangeForm(describeYou)
}
