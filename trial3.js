var total_error = 0;
function controlFunction(block)
{

  total_error += block.x;
  return -40*block.x +(-2.5*block.dx) - 0.01*(total_error);
}
