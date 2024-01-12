function add(x, y) {
  return x + y
}

function sub(x, y){
    return x-y
}

 switch(x){
        case 1:
        return add(x,y)
        break;
        case 2:
        return sub(x,y)
        break;
        default:
        return "no operation"
 }
module.exports = {switch};
