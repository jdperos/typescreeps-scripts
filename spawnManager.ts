/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawnManager');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    spawnUnit: function(unitTemplate)
    {
        var spawnManager = require("spawnManager");
        switch(unitTemplate)
        {
            case "Harvester":
                spawnManager.spawnHarvester();
                break;
            case "Builder":
                spawnManager.spawnBuilder();
                break;
            case "Upgrader":
                spawnManager.spawnUpgrader();
                break;
            default:
                console.log("No unitTemplate of type " + unitTemplate);
        }
    },
    
    spawnHarvester: function()
    {
        var newName = 'Harvester' + Game.time;
        if( Game.spawns['Spawn1'].spawnCreep(
            //[WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], 
            [WORK,CARRY,MOVE],
            newName, 
            {
                memory: {role: 'harvester'}
            }) == OK )
        {
            console.log('Spawning new harvester: ' + newName);
        }
    },

    spawnBuilder: function()
    {
        var newName = 'Builder' + Game.time;
        if( Game.spawns['Spawn1'].spawnCreep(
            //[WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], 
            [WORK,CARRY,MOVE],
            newName, 
            {
                memory: {role: 'builder'}
            }) == OK )
        {
            console.log('Spawning new builder: ' + newName);
        }
    },
    
    spawnUpgrader: function()
    {
        var newName = 'Upgrader' + Game.time;
        if( Game.spawns['Spawn1'].spawnCreep(
            //[WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], 
            [WORK,CARRY,MOVE],
            newName, 
            {
                memory: {role: 'upgrader'}
            }) == OK )
        {
            console.log('Spawning new upgrader: ' + newName);
        }
    }
};