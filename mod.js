//TechnologyCraft
//Version 0.1
//Mod Made By TheSkyMachine
//Do NOT distribute without my permission!
 
/*----------VARIABLES----------*/
var jetpackOn = false;
var jetp = false;
var jetbt = false;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var mX;
var mY;
var mZ;
var timerActive = false;
var countdown = 0;
var chestSelect = false;
var cX;
var cY;
var cZ;
var cSlot = 0;
var ccSlot = 0;

/*----------ITEMS----------*/
Item.addCraftRecipe(265,1,0,[343,4,0]); 
 
ModPE.setItem(326,"gold_horse_armor",0,"refinedIron",64);
ModPE.langEdit("item.refinedIron.name","Refined Iron");
Item.addFurnaceRecipe(265,326,0);
Item.setCategory(326,ItemCategory.MATERIAL,0); 
 
ModPE.setItem(327,"slimeball",0,"ironCable",64);
ModPE.langEdit("item.ironCable.name","Iron Cable");
Item.addShapedRecipe(327,9,0,["   ","rrr","   "],["r",326,0]);
Item.setCategory(327,ItemCategory.MATERIAL,0);
 
ModPE.setItem(335,"record_chirp",0,"simpleCircuit",64);
ModPE.langEdit("item.simpleCircuit.name","Simple Circuit");
Item.addShapedRecipe(335,1,0,["ccc","dpd","ccc"],["p",342,0,"d",331,0,"c",327,0]);
Item.setCategory(335,ItemCategory.MATERIAL,0);
 
ModPE.setItem(346,"diamond_horse_armor",0,"advancedCircuit",64);
ModPE.langEdit("item.advancedCircuit.name","Advanced Circuit");
Item.addShapedRecipe(346,1,0,[" d ","ici"," d "],["c",335,0,"i",327,0,"d",331,0]);
Item.setCategory(346,ItemCategory.MATERIAL,0);
 
ModPE.setItem(342,"book_written",0,"ironPlate",64);
ModPE.langEdit("item.ironPlate.name","Iron Plate");
Item.addCraftRecipe(342,2,0,[326,1,0]);
Item.setCategory(342,ItemCategory.MATERIAL,0);
 
ModPE.setItem(343,"record_far",0,"ironScrap",64);
ModPE.langEdit("item.ironScrap.name","Iron Scrap");
Item.setCategory(343,ItemCategory.MATERIAL,0);
 
ModPE.setItem(349,"iron_horse_armor",0,"jetPack",64);
ModPE.langEdit("item.jetPack.name","Jetpack");
Item.addShapedRecipe(349,1,0,[" d ","ici"," d "],["a",346,0,"i",327,0,"d",331,0]);
Item.setCategory(349,ItemCategory.TOOL,0);
 
 
/*----------BLOCKS----------*/
Block.defineBlock(23,"Standard Machine","mob_spawner",42,false,0);
Block.setDestroyTime(23,2.0);
Item.addShapedRecipe(23,1,0,["rrr","r r","rrr"],["r",326,0]);
Item.setCategory(23,ItemCategory.MATERIAL,0);
 
Block.defineBlock(25,"Recycler",[["mob_spawner",0],["piston_top_normal",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0]],17,false,0); 
Block.setDestroyTime(25,2.0);
Item.addShapedRecipe(25,1,0,["   ","psp"," c "],["s",23,0,"c",335,0,"p",1,0]); 
Item.setCategory(25,ItemCategory.MATERIAL,0);

var mmgui;

function useItem(x,y,z,itemId,blockId)
{
  if(itemId==3)
  {
    mX = x;
    mY = y;
    mZ = z;
    setTile(mX+3,mY,mZ,1);
    setTile(mX-3,mY,mZ,1);
    setTile(mX,mY,mZ+3,1);
    setTile(mX,mY,mZ-3,1);
    setTile(mX+3,mY,mZ-1,1);
    setTile(mX+3,mY,mZ-2,1);
    setTile(mX+3,mY,mZ-3,1);
    setTile(mX+3,mY,mZ+1,1);
    setTile(mX+3,mY,mZ+2,1);
    setTile(mX+3,mY,mZ+3,1);
    setTile(mX+1,mY,mZ+3,1);
    setTile(mX+2,mY,mZ+3,1);
    setTile(mX-1,mY,mZ+3,1);
    setTile(mX-2,mY,mZ+3,1);
    setTile(mX-3,mY,mZ+3,1);
    setTile(mX+1,mY,mZ-3,1);
    setTile(mX+2,mY,mZ-3,1);
    setTile(mX-1,mY,mZ-3,1);
    setTile(mX-2,mY,mZ-3,1);
    setTile(mX-3,mY,mZ-3,1);
    setTile(mX-3,mY,mZ+1,1);
    setTile(mX-3,mY,mZ+2,1);
    setTile(mX-3,mY,mZ-1,1);
    setTile(mX-3,mY,mZ-2,1);
    clientMessage("Mining Machine Ready");
  }
  if(blockId==3)
  {
    showMM();
  }
  if(blockId==54 && chestSelect==true)
  {
    cX = x;
    cY = y;
    cZ = z;
    clientMessage("Chest selected!");
    chestSelect = false;
  }
}

function showMM()
{
          var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var mmLayout = new android.widget.LinearLayout(ctx);
            var mmScroll = new android.widget.ScrollView(ctx);
            var mmLayout1 = new android.widget.LinearLayout(ctx);
            mmLayout.setOrientation(1);
            mmLayout1.setOrientation(1);

            mmScroll.addView(mmLayout);
            mmLayout1.addView(mmScroll);

            var ammbutton = new android.widget.Button(ctx);
            ammbutton.setText("Activate");
            ammbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("Mining Machine Activated");
                    timerActive = true;
					mmgui.dismiss();
                    countdown = 0;
        			}
            }));
            mmLayout.addView(ammbutton);

            var dmmbutton = new android.widget.Button(ctx);
            dmmbutton.setText("Deactivate");
            dmmbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("Mining Machine Deactivated");
                    timerActive = false;
                    mmgui.dismiss();
                    countdown = 0;
                }
            }));
            mmLayout.addView(dmmbutton);
          
            var cmmbutton = new android.widget.Button(ctx);
            cmmbutton.setText("Select Chest");
            cmmbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("Tap in a chest to select it!");
                    mmgui.dismiss();
                    chestSelect = true;
                }
            }));
            mmLayout.addView(cmmbutton);

            mmgui = new android.widget.PopupWindow(mmLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/3);
            mmgui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            mmgui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}

function modTick()
{
  if(timerActive == true) {
        countdown++;
        if(countdown >= 80)
        {
            setTile(mX,mY,mZ,0);
            setTile(mX+1,mY,mZ,0);
            setTile(mX-1,mY,mZ,0);
            setTile(mX,mY,mZ+1,0); 
            setTile(mX,mY,mZ-1,0);
            setTile(mX+1,mY,mZ-1,0);
            setTile(mX+1,mY,mZ+1,0);
            setTile(mX+2,mY,mZ,0);
            setTile(mX+2,mY,mZ-1,0);
            setTile(mX+2,mY,mZ+1,0);
            setTile(mX-1,mY,mZ-1,0);
            setTile(mX-1,mY,mZ+1,0);
            setTile(mX-2,mY,mZ,0);
            setTile(mX-2,mY,mZ+1,0);
            setTile(mX-2,mY,mZ-1,0);
            setTile(mX,mY,mZ-2,0);
            setTile(mX+1,mY,mZ-2,0);
            setTile(mX+2,mY,mZ-2,0);
            setTile(mX-1,mY,mZ-2,0);
            setTile(mX-2,mY,mZ-2,0);
            setTile(mX,mY,mZ+2,0);
            setTile(mX+1,mY,mZ+2,0);
            setTile(mX+2,mY,mZ+2,0);
            setTile(mX-1,mY,mZ+2,0);
            setTile(mX-2,mY,mZ+2,0);
            mY--;
            clientMessage("Mining!");
            countdown = 0;
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            Level.setChestSlot(cX,cY,cZ,cSlot,getTile(mX,mY,mZ),0,Level.getChestSlotCount(cX,cY,cZ,cSlot)+1);
            ccSlot++;
        }
    }
if(jetpackOn==true)
{
jetpackTick();
}
else
{

}
 
}
 
function jetpackTick()
{
toDirectionalVector
(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
var player = getPlayerEnt();
setVelX(player,
playerFlySpeed * playerDir[0]);
setVelY(player,
playerFlySpeed * playerDir[1]);
setVelZ(player,
playerFlySpeed * playerDir[2]);
}
function toDirectionalVector(vector,
yaw, pitch)
{
vector[0] = Math.cos(yaw)
* Math.cos(pitch);
vector[1] = Math.sin(pitch)
;
vector[2] = Math.sin(yaw)
* Math.cos(pitch);
}


var GUI;
var menu;
var exitUI;

function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel()
{
  clientMessage("TechnologyCraft");
  clientMessage("Version 0.2");
  clientMessage("Mod Made By TheSkyMachine");
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("Menu");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                    exit();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}

function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);

            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

            var button = new android.widget.Button(ctx);
            button.setText("What's New");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //CODE
                }
            }));
            menuLayout.addView(button);

            var abutton = new android.widget.Button(ctx);
            abutton.setText("Tips");
            abutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //CODE
                }
            }));
            menuLayout.addView(abutton);

            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/3);
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}

function exit(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xLayout = new android.widget.LinearLayout(ctx);

            var xButton = new android.widget.Button(ctx);
            xButton.setText("X");
            xButton.setTextColor(android.graphics.Color.WHITE);
            xButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);

            exitUI = new android.widget.PopupWindow(xLayout, dip2px(550), dip2px(200));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
        if(menu != null){
            menu.dismiss();
            menu = null;
        }
        if(exitUI != null){
            exitUI.dismiss();
            exitUI = null;
        }
        if(mmgui != null){
            mmgui.dismiss();
            mmgui = null;
        }
    }}));
}
