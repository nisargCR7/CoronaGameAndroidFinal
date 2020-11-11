class Score{
    constructor(){
    this.index=0
    this.index2=0
    this.index3=0
  }
     
     
    getM(x){
        this.index=this.index+1
        var QuestionRef  = database.ref('Score/P'+this.index+'/minutes');
        QuestionRef.on("value",function(data){
        Minutes[x] = data.val();
      })
       
    }
    getS(x){
        this.index2=this.index2+1
        var QuestionRef  = database.ref('Score/P'+this.index2+'/seconds');
        QuestionRef.on("value",function(data){
        Seconds[x] = data.val();
      })
     
    }
    
    getN(x){
      this.index3=this.index3+1
      var QuestionRef  = database.ref('Score/P'+this.index3+'/name');
      QuestionRef.on("value",function(data){
      Name[x] = data.val();
    })
   
  } 

    updateM(x,y){
        var playerIndex = 'Score/P'+y;
        database.ref(playerIndex).update({
          minutes:x
        
        });
      }
      
      updateS(x,y){
        var playerIndex ='Score/P'+y;
        database.ref(playerIndex).update({
          seconds:x
        
        });
      }


      updateN(x,y){
        var playerIndex ='Score/P'+y;
        database.ref(playerIndex).update({
          name:x
        
        });
      }

    checkScore(){
    store_min=9-store_min
    store_sec=60-store_sec
    store_sec2=store_min*60+store_sec
    for(var a=0;a<5;a++){
      Seconds2[a]=Minutes[a]*60+Seconds[a]            
      
     }
 
    if(store_sec2<Seconds2[0]){
      for(var i=3;i>-1;i--){
        
        this.updateM(Minutes[i],i+2)
        this.updateS(Seconds[i],i+2)
        this.updateN(Name[i],i+2)
      }
      
        this.updateM(store_min,1)
        this.updateS(store_sec,1)
        this.updateN(player.name,1)
    
        
 
      }


    if(store_sec2<Seconds2[1]&&store_sec2>Seconds2[0]){
      
      for(var i=2;i>-1;i--){
        this.updateM(Minutes[i],i+2)
        this.updateS(Seconds[i],i+2)
        this.updateN(Name[i],i+2)
      }

        this.updateM(store_min,2)
        this.updateS(store_sec,2)
        this.updateN(player.name,2)
        
      }
    if(store_sec2<Seconds2[2]&&store_sec2>Seconds2[1]){
      for(var i=1;i>-1;i--){
        this.updateM(Minutes[i],i+2)
        this.updateS(Seconds[i],i+2)
        this.updateN(Name[i],i+2)
      }
        this.updateM(store_min,3)
        this.updateS(store_sec,3)
        this.updateN(player.name,3)
       
    }
    if(store_sec2<Seconds2[3]&&store_sec2>Seconds2[2]){
      for(var i=0;i>-1;i--){
        this.updateM(Minutes[i],i+2)
        this.updateS(Seconds[i],i+2)
        this.updateN(Name[i],i+2)
      }

        this.updateM(store_min,4)
        this.updateS(store_sec,4)
        this.updateN(player.name,4)
        
      }
    if(store_sec2<Seconds2[4]&&store_sec2>Seconds2[3]){

        this.updateM(store_min,5)
        this.updateS(store_sec,5)
        this.updateN(player.name,5)
        
      }
    if(store_sec2>Seconds2[4]){
        
        
        
    }
    }
  

  
    }
