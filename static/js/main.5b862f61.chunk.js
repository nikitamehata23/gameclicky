(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{name:"little mac",img_url:"http://static.comicvine.com/uploads/original/11121/111217887/4386650-mac.jpg"},{name:"glass joe",img_url:"http://pre01.deviantart.net/0f5c/th/pre/i/2014/307/c/3/real_ish_glass_joe_by_ressq-d8574d2.png"},{name:"von kaiser",img_url:"https://assets.pinshape.com/uploads/image/file/146539/container_von-kaiser-punch-out-3d-printing-146539.JPG"},{name:"don flamenco",img_url:"http://img3.wikia.nocookie.net/__cb20101115192051/punchout/images/2/27/1026518-punch_out_wii_wiki_prop_don_flamenco_01_super.png"},{name:"mr sandman",img_url:"http://3.bp.blogspot.com/_337VLNYe7kY/RyYQUpBkWGI/AAAAAAAABaQ/nC_4jd3z04w/s400/Green%2520Lantern.jpg"},{name:"bald bull",img_url:"http://www.vicioplanet.net/wp-content/uploads/image/punch%20out/Bald%20Bull%20Punch%20Out%20Wii.gif"},{name:"king hippo",img_url:"http://static2.wikia.nocookie.net/__cb20090414182819/punchout/images/9/93/King_Hippo.jpg"},{name:"great tiger",img_url:"https://static.giantbomb.com/uploads/scale_small/0/3017/1026519-punch_out_wii_wiki_prop_great_tiger_01.png"},{name:"super macho man",img_url:"http://img3.wikia.nocookie.net/__cb20090810113333/enemvillians/images/6/6c/Super_Macho_Man.jpg"},{name:"piston honda",img_url:"http://vignette4.wikia.nocookie.net/punchout/images/c/c4/R7P_C08_PistonHondo_B_ad--article_image.jpg/revision/latest?cb=20090506155430"},{name:"soda popinski",img_url:"http://t04.deviantart.net/xKLkxuEyNUlD_SD1GIHuevPB35A=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre11/5c91/th/pre/f/2011/045/7/f/soda_popinski_by_arigatoarigato-d39l0mi.png"},{name:"mike tyson",img_url:"http://lovethiscitytv.com/wp-content/uploads/2014/09/Mike-Tyson.png"}]},,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),s=(a(16),a(7)),o=a(4),l=a(5),m=a(8),u=a(6),h=a(9),g=a(1),d=function(e){return c.a.createElement("div",{className:"container-fluid"},e.children)},p=(a(17),function(){return c.a.createElement("nav",{className:"navbar mb-1 navigation"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("h2",{className:"navbar-brand",href:"/"},"Clicky-Clicky!!")),c.a.createElement("ul",{className:"nav navbar-nav"},c.a.createElement("h2",{href:"https://github.com/nikitamehata23/gameclicky"},"GitHub Repo")))}),f=(a(18),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron bg text-center"},c.a.createElement("h1",{className:"logo"},"Clicky-Clicky!!"),c.a.createElement("h3",{className:"desc"},"Click on a character to earn points, if you click the same character twice you lose!")))}),v=(a(19),function(e){return c.a.createElement("div",{className:"container text-center mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"glove1 col-sm-1 mr-auto"}),c.a.createElement("h2",{className:"scoreboard col-sm-10"},e.msg),c.a.createElement("div",{className:"glove2 col-sm-1 ml-auto"}))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h2",{className:"scoreboard"},"Score: ",e.score," | High Score: ",e.highScore))))}),_=(a(20),function(e){return c.a.createElement("div",{id:e.name,onClick:function(){return e.handleClick(e.name)}},c.a.createElement("img",{className:"img-thumbnail",alt:e.name,src:e.img_url}))}),k=(a(21),function(e){return e.score>=12?c.a.createElement("div",{className:"winner text-center container-fluid"},c.a.createElement("button",{className:"new-game btn",onClick:function(){return e.handleClick(e.gameover)}},"new game")):c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"gameover"},e.countdown))});var E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={msg:"Click any character to begin",score:0,highScore:0,chars:g,selected:[],gameover:!1,countdown:""},a.shuffleChars=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(g);a.setState({chars:e})},a.handleClick=function(e){a.state.gameover?a.setState({msg:"Click any character to begin",selected:[],score:0,gameover:!1}):-1===a.state.selected.indexOf(e)?(a.increment(),a.setState({selected:[].concat(Object(s.a)(a.state.selected),[e])})):(a.setState({msg:"GAME OVER",gameover:!0}),a.reset(),setTimeout(function(){a.setState({countdown:3})},1e3),setTimeout(function(){a.setState({countdown:2})},2e3),setTimeout(function(){a.setState({countdown:1})},3e3))},a.increment=function(){var e=a.state.score+1;a.setState({score:e,msg:"You guessed correctly!"}),e>=a.state.highScore&&a.setState({highScore:e}),12===e&&a.setState({msg:"You win!",selected:[],gameover:!0}),a.shuffleChars()},a.reset=function(){setTimeout(function(){a.setState({msg:"Click any character to begin",score:0,highScore:a.state.highScore,selected:[],gameover:!1,countdown:3}),a.shuffleChars()},4e3)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.gameover?c.a.createElement(d,null,c.a.createElement(p,null),c.a.createElement(f,null),c.a.createElement(v,{msg:this.state.msg,score:this.state.score,highScore:this.state.highScore}),c.a.createElement("div",{className:"container"},c.a.createElement(k,{msg:this.props.msg,score:this.state.score,gameover:this.state.gameover,countdown:this.state.countdown,handleClick:this.handleClick,reset:this.reset}))):c.a.createElement(d,null,c.a.createElement(p,null),c.a.createElement(f,null),c.a.createElement(v,{msg:this.state.msg,score:this.state.score,highScore:this.state.highScore}),c.a.createElement("div",{className:"container"},this.state.chars.map(function(t){return c.a.createElement(_,{key:t.name,name:t.name,img_url:t.img_url,shuffleChars:e.shuffleChars,handleClick:e.handleClick,increment:e.increment,reset:e.reset})})))}}]),t}(n.Component);r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5b862f61.chunk.js.map