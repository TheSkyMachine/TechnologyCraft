//TechnologyCraft
//Version Beta 0.1
//Mod Made By TheSkyMachine
//Do NOT distribute without my permission!

/*----------VARIABLES----------*/
var jetpackOn = false;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;


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


function newLevel()
{
clientMessage("TechnologyCraft");
clientMessage("Version Beta 0.1");
clientMessage("Mod Made By TheSkyMachine");
}

function modTick()
{
if(getCarriedItem()==349)
{
jetpackTick();
jetpackOn = true; 
}
else
{
jetpackOn = false;
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

function jeton()
{
  jetbutton.setText("Activate");
}

var buttonWindow = null;

function  newLevel() {
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try {
          buttonWindow = new android.widget.PopupWindow();
          var layout = new android.widget.RelativeLayout(activity);
          var jetbutton = new android.widget.Button(activity);
          jetbutton.setText("Activate");
          jetbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) {
                  if(jetpackOn==)
                }
          }));
          layout.addView(button);
          buttonWindow.setContentView(layout);
          buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
          buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(problem){
          print("Button could not be displayed: " + problem);
        }
  }}));
}

function leaveGame()
{
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(buttonWindow != null) {
          buttonWindow.dismiss();
          buttonwindow = null;
        }
  }}));
}
