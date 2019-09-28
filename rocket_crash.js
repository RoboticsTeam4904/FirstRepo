function controlFunction(rocket)
{
  if (Math.abs(0.5*rocket.theta) > 3.14/2)
  {
    if (0.5*rocket.theta > 3.14/2)
    {
      return{throttle: Math.abs(rocket.x)-(rocket.y/3.75), gimbalAngle:3.14/2}
    }
    else
    {
      return{throttle: Math.abs(rocket.x)-(rocket.y/3.75), gimbalAngle:(3.14/2)*(-1)}
    }
  }
  else
  {
    return{throttle: Math.abs(rocket.x)-(rocket.y/3.75), gimbalAngle:(0.001*rocket.x)+(0.25*rocket.theta)}
  }
  
  /*if (rocket.x >= -rocket.T*2 && rocket.x <= rocket.T*2)
  {
    return{throttle:0, gimbalAngle: 0};
  }
  else
  {
    if (rocket.x < 0)
    {
      return {throttle:(rocket.x*(-1))-(rocket.y/10)/(rocket.T*5),gimbalAngle:(0.5*rocket.theta)-0.2};
    }
    else
    {
      return {throttle:(rocket.x)-(rocket.y/10)/(rocket.T*5),gimbalAngle:(0.5*rocket.theta)+0.2};
    }
  }*/
}