function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $bbd382acdd346c4f$exports = {};

$parcel$defineInteropFlag($bbd382acdd346c4f$exports);

$parcel$export($bbd382acdd346c4f$exports, "default", () => $bbd382acdd346c4f$export$2e2bcd8739ae039);
var $2118e07120e2cddd$exports = {};

$parcel$defineInteropFlag($2118e07120e2cddd$exports);

$parcel$export($2118e07120e2cddd$exports, "OptionUnwrapError", () => $2118e07120e2cddd$export$a97188f46719f5cf);
$parcel$export($2118e07120e2cddd$exports, "isSome", () => $2118e07120e2cddd$export$5d7e502287836e58);
$parcel$export($2118e07120e2cddd$exports, "isNone", () => $2118e07120e2cddd$export$e56af863d5645d5f);
$parcel$export($2118e07120e2cddd$exports, "None", () => $2118e07120e2cddd$export$57ca7e07b341709d);
$parcel$export($2118e07120e2cddd$exports, "Some", () => $2118e07120e2cddd$export$9f9d0139d032da4f);
$parcel$export($2118e07120e2cddd$exports, "default", () => $2118e07120e2cddd$export$2e2bcd8739ae039);
var $f070520e7a152c2b$exports = {};

$parcel$defineInteropFlag($f070520e7a152c2b$exports);

$parcel$export($f070520e7a152c2b$exports, "compose", () => $f070520e7a152c2b$export$f672e0b6f7222cd7);
$parcel$export($f070520e7a152c2b$exports, "default", () => $f070520e7a152c2b$export$2e2bcd8739ae039);
function $f070520e7a152c2b$export$f672e0b6f7222cd7(...fns) {
    return (it)=>fns.reduce((value, f)=>f(value), it);
}
const $f070520e7a152c2b$var$Compose = {
    $: $f070520e7a152c2b$export$f672e0b6f7222cd7,
    debug: (msg, logger = (p, o, m)=>console.log(p, m, o))=>(it)=>{
            logger(`pipe.debug`, it, msg || "");
            return it;
        }
};
var $f070520e7a152c2b$export$2e2bcd8739ae039 = $f070520e7a152c2b$var$Compose;



function $b3184ccc81136521$export$eeb33c773b1c585e(...fns) {
    return (0, $2118e07120e2cddd$export$2e2bcd8739ae039).map((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}


const $2118e07120e2cddd$var$optionTag = Symbol("Option");
const $2118e07120e2cddd$var$noneTag = Symbol("None");
const $2118e07120e2cddd$var$someTag = Symbol("Some");
class $2118e07120e2cddd$export$a97188f46719f5cf extends Error {
}
const $2118e07120e2cddd$export$5d7e502287836e58 = (option)=>$2118e07120e2cddd$var$optionTag in option && option[$2118e07120e2cddd$var$optionTag] === $2118e07120e2cddd$var$someTag;
const $2118e07120e2cddd$export$e56af863d5645d5f = (option)=>$2118e07120e2cddd$var$optionTag in option && option[$2118e07120e2cddd$var$optionTag] === $2118e07120e2cddd$var$noneTag;
const $2118e07120e2cddd$export$57ca7e07b341709d = ()=>({
        [$2118e07120e2cddd$var$optionTag]: $2118e07120e2cddd$var$noneTag
    });
function $2118e07120e2cddd$export$9f9d0139d032da4f(value) {
    if (typeof value === "object" && $2118e07120e2cddd$var$optionTag in value) return value;
    return {
        [$2118e07120e2cddd$var$optionTag]: $2118e07120e2cddd$var$someTag,
        [$2118e07120e2cddd$var$someTag]: value
    };
}
/**
 * @unsafe
 * @throws
 */ const $2118e07120e2cddd$var$unwrap = (option)=>$2118e07120e2cddd$export$5d7e502287836e58(option) ? option[$2118e07120e2cddd$var$someTag] : (()=>{
        throw new $2118e07120e2cddd$export$a97188f46719f5cf();
    })();
const $2118e07120e2cddd$var$fromSome = (some)=>$2118e07120e2cddd$var$unwrap(some);
const $2118e07120e2cddd$var$toOption = (obj, opts = {})=>{
    if (opts.allowNull && obj === null || opts.allowUndefined && obj === undefined || obj !== undefined && obj !== null) return $2118e07120e2cddd$export$9f9d0139d032da4f(obj);
    return $2118e07120e2cddd$export$57ca7e07b341709d();
};
function $2118e07120e2cddd$var$map(mapper) {
    return (opt)=>{
        if ($2118e07120e2cddd$export$5d7e502287836e58(opt)) return $2118e07120e2cddd$export$9f9d0139d032da4f(mapper($2118e07120e2cddd$var$fromSome(opt)));
        return $2118e07120e2cddd$export$57ca7e07b341709d();
    };
}
const $2118e07120e2cddd$var$Options = {
    map: $2118e07120e2cddd$var$map,
    of: $2118e07120e2cddd$var$toOption,
    unwrap: $2118e07120e2cddd$var$unwrap,
    get: $2118e07120e2cddd$var$fromSome,
    $: (0, $b3184ccc81136521$export$eeb33c773b1c585e)
};
var $2118e07120e2cddd$export$2e2bcd8739ae039 = $2118e07120e2cddd$var$Options;


var $d72fb4422786eb14$exports = {};

$parcel$defineInteropFlag($d72fb4422786eb14$exports);

$parcel$export($d72fb4422786eb14$exports, "ResultUnwrapError", () => $d72fb4422786eb14$export$61720c0b3b91cede);
$parcel$export($d72fb4422786eb14$exports, "Err", () => $d72fb4422786eb14$export$3659d3f2d3dfceb8);
$parcel$export($d72fb4422786eb14$exports, "Ok", () => $d72fb4422786eb14$export$8146e38189b4f4dc);
$parcel$export($d72fb4422786eb14$exports, "isOk", () => $d72fb4422786eb14$export$71a04ee6075aae31);
$parcel$export($d72fb4422786eb14$exports, "isErr", () => $d72fb4422786eb14$export$5edd8010b0a12d92);
$parcel$export($d72fb4422786eb14$exports, "default", () => $d72fb4422786eb14$export$2e2bcd8739ae039);


function $52e3e26cf1264982$export$e6a6e53d41d50eb8(...fns) {
    return (0, $d72fb4422786eb14$export$2e2bcd8739ae039).mapErr((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}




function $394a54507ccd87d5$export$9afd675414c1ad49(...fns) {
    return (0, $d72fb4422786eb14$export$2e2bcd8739ae039).map((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}


const $d72fb4422786eb14$var$resultTag = Symbol("result");
const $d72fb4422786eb14$var$errorTag = Symbol("error");
const $d72fb4422786eb14$var$okTag = Symbol("ok");
class $d72fb4422786eb14$export$61720c0b3b91cede extends Error {
    constructor(uncaught, message){
        super(message);
        this.uncaught = uncaught;
    }
}
const $d72fb4422786eb14$export$3659d3f2d3dfceb8 = (e)=>({
        [$d72fb4422786eb14$var$resultTag]: $d72fb4422786eb14$var$errorTag,
        [$d72fb4422786eb14$var$errorTag]: e
    });
const $d72fb4422786eb14$export$8146e38189b4f4dc = (value)=>({
        [$d72fb4422786eb14$var$resultTag]: $d72fb4422786eb14$var$okTag,
        [$d72fb4422786eb14$var$okTag]: value
    });
const $d72fb4422786eb14$export$71a04ee6075aae31 = (result)=>$d72fb4422786eb14$var$resultTag in result && result[$d72fb4422786eb14$var$resultTag] === $d72fb4422786eb14$var$okTag;
const $d72fb4422786eb14$export$5edd8010b0a12d92 = (result)=>$d72fb4422786eb14$var$resultTag in result && result[$d72fb4422786eb14$var$resultTag] === $d72fb4422786eb14$var$errorTag;
/**
 * @unsafe
 * @throws
 */ const $d72fb4422786eb14$var$unwrap = ()=>(result)=>$d72fb4422786eb14$export$71a04ee6075aae31(result) ? result[$d72fb4422786eb14$var$okTag] : (()=>{
            throw new $d72fb4422786eb14$export$61720c0b3b91cede(result[$d72fb4422786eb14$var$errorTag]);
        })();
/**
 * @unsafe
 * @throws
 */ const $d72fb4422786eb14$var$unwrapErr = ()=>(result)=>$d72fb4422786eb14$export$5edd8010b0a12d92(result) ? result[$d72fb4422786eb14$var$errorTag] : (()=>{
            throw new $d72fb4422786eb14$export$61720c0b3b91cede(result[$d72fb4422786eb14$var$okTag]);
        })();
const $d72fb4422786eb14$var$fromOk = ()=>(ok)=>$d72fb4422786eb14$var$unwrap()(ok);
const $d72fb4422786eb14$var$fromErr = ()=>(err)=>$d72fb4422786eb14$var$unwrapErr()(err);
const $d72fb4422786eb14$var$toResult = (fn)=>{
    try {
        return $d72fb4422786eb14$export$8146e38189b4f4dc(fn());
    } catch (e) {
        return $d72fb4422786eb14$export$3659d3f2d3dfceb8(e);
    }
};
function $d72fb4422786eb14$var$map(mapper) {
    return (res)=>{
        if ($d72fb4422786eb14$export$71a04ee6075aae31(res)) return $d72fb4422786eb14$var$toResult(()=>mapper($d72fb4422786eb14$var$fromOk()(res)));
        return $d72fb4422786eb14$export$3659d3f2d3dfceb8(res[$d72fb4422786eb14$var$errorTag]);
    };
}
function $d72fb4422786eb14$var$mapErr(mapper) {
    return (res)=>{
        if ($d72fb4422786eb14$export$5edd8010b0a12d92(res)) return $d72fb4422786eb14$export$3659d3f2d3dfceb8(mapper($d72fb4422786eb14$var$fromErr()(res)));
        return res;
    };
}
const $d72fb4422786eb14$var$merge = ()=>(either)=>{
        if ($d72fb4422786eb14$export$71a04ee6075aae31(either)) return $d72fb4422786eb14$var$fromOk()(either);
        else return $d72fb4422786eb14$var$fromErr()(either);
    };
const $d72fb4422786eb14$var$Results = {
    unwrap: $d72fb4422786eb14$var$unwrap,
    getOk: $d72fb4422786eb14$var$fromOk,
    getErr: $d72fb4422786eb14$var$fromErr,
    of: $d72fb4422786eb14$var$toResult,
    map: $d72fb4422786eb14$var$map,
    mapErr: $d72fb4422786eb14$var$mapErr,
    $: (0, $394a54507ccd87d5$export$9afd675414c1ad49),
    $Err: (0, $52e3e26cf1264982$export$e6a6e53d41d50eb8),
    merge: $d72fb4422786eb14$var$merge
};
var $d72fb4422786eb14$export$2e2bcd8739ae039 = $d72fb4422786eb14$var$Results;


const $bbd382acdd346c4f$var$map = (fn)=>(array)=>array.map(fn);
const $bbd382acdd346c4f$var$filter = (fn)=>(array)=>array.filter(fn);
const $bbd382acdd346c4f$var$find = (fn)=>(array)=>(0, $2118e07120e2cddd$export$2e2bcd8739ae039).of(array.find(fn));
const $bbd382acdd346c4f$var$every = (fn)=>(array)=>array.every(fn);
const $bbd382acdd346c4f$var$some = (fn)=>(array)=>array.some(fn);
const $bbd382acdd346c4f$var$reduce = (fn, initialValue)=>(array)=>array.reduce(fn, initialValue);
const $bbd382acdd346c4f$var$reduceRight = (fn, initialValue)=>(array)=>array.reduceRight(fn, initialValue);
const $bbd382acdd346c4f$var$foldl = (fn, defaultValue)=>(array)=>array.length === 0 ? defaultValue : array.reduce(fn, array.at(0));
const $bbd382acdd346c4f$var$foldr = (fn, defaultValue)=>(array)=>array.length === 0 ? defaultValue : array.slice(0, -1).reduceRight(fn, array.at(array.length - 1));
const $bbd382acdd346c4f$var$isEmpty = ()=>(array)=>array.length === 0;
const $bbd382acdd346c4f$var$fromString = (delimiter)=>(str)=>str.split(delimiter);
const $bbd382acdd346c4f$var$join = (delimiter = "")=>(array)=>array.join(delimiter);
const $bbd382acdd346c4f$var$sum = ()=>(array)=>array.reduce((acc, it)=>it + acc, 0);
const $bbd382acdd346c4f$var$product = ()=>(array)=>array.reduce((acc, it)=>it * acc, 1);
const $bbd382acdd346c4f$var$pow = (exp)=>(array)=>array.map((it)=>Math.pow(it, exp));
const $bbd382acdd346c4f$var$powOf = (base)=>(array)=>array.map((it)=>Math.pow(base, it));
/** Returns Result$Err if divisor === 0 */ const $bbd382acdd346c4f$var$divBy = (divisor)=>(array)=>array.map((it)=>divisor === 0 ? (0, $d72fb4422786eb14$export$3659d3f2d3dfceb8)(new Error("division by zero")) : (0, $d72fb4422786eb14$export$2e2bcd8739ae039).of(()=>it / divisor));
/** Returns Result$Err if any element === 0 */ const $bbd382acdd346c4f$var$divOf = (dividend)=>(array)=>array.map((it)=>it === 0 ? (0, $d72fb4422786eb14$export$3659d3f2d3dfceb8)(new Error("division by zero")) : (0, $d72fb4422786eb14$export$2e2bcd8739ae039).of(()=>dividend / it));
const $bbd382acdd346c4f$var$tuple = (size = 2)=>(array)=>{
        const out = [];
        for(let i = 0; i < array.length; i += size){
            const subarray = array.slice(i, i + size).map((0, $2118e07120e2cddd$export$9f9d0139d032da4f));
            while(subarray.length < size)subarray.push((0, $2118e07120e2cddd$export$57ca7e07b341709d)());
            out.push(subarray);
        }
        return out;
    };
const $bbd382acdd346c4f$var$flat = ()=>(arrayOfArrays)=>arrayOfArrays.flat();
const $bbd382acdd346c4f$var$flatMap = (fn)=>(array)=>array.flatMap(fn);
const $bbd382acdd346c4f$var$first = ()=>(array)=>array.length === 0 ? (0, $2118e07120e2cddd$export$57ca7e07b341709d)() : (0, $2118e07120e2cddd$export$9f9d0139d032da4f)(array[0]);
const $bbd382acdd346c4f$var$last = ()=>(array)=>array.length === 0 ? (0, $2118e07120e2cddd$export$57ca7e07b341709d)() : (0, $2118e07120e2cddd$export$9f9d0139d032da4f)(array.at(array.length - 1));
const $bbd382acdd346c4f$var$append = (elem)=>(array)=>[
            ...array,
            elem
        ];
const $bbd382acdd346c4f$var$prepend = (elem)=>(array)=>[
            elem,
            ...array
        ];
const $bbd382acdd346c4f$var$reverse = ()=>(array)=>[
            ...array
        ].reverse();
const $bbd382acdd346c4f$var$between = (greaterThan, lowerThan)=>(array)=>array.filter((it)=>it > greaterThan && it < lowerThan);
const $bbd382acdd346c4f$var$betweenEq = (greaterThanEqual, lowerThanEqual)=>(array)=>array.filter((it)=>it >= greaterThanEqual && it <= lowerThanEqual);
const $bbd382acdd346c4f$var$gt = (greaterThan)=>(array)=>array.filter((it)=>it > greaterThan);
const $bbd382acdd346c4f$var$gte = (greaterThanEqual)=>(array)=>array.filter((it)=>it >= greaterThanEqual);
const $bbd382acdd346c4f$var$lt = (lowerThan)=>(array)=>array.filter((it)=>it < lowerThan);
const $bbd382acdd346c4f$var$lte = (lowerThanEqual)=>(array)=>array.filter((it)=>it <= lowerThanEqual);
const $bbd382acdd346c4f$var$debug = (prefix = "")=>(array)=>{
        array.forEach((it, i)=>console.log(`debug${prefix ? `[${prefix}]` : ""}[${i}] =`, it));
        return [
            ...array
        ];
    };
const $bbd382acdd346c4f$var$shiftr = (by = 1)=>([...array])=>{
        if (array.length === 0) return array;
        const byRem = by % array.length;
        return [
            ...array.slice(array.length - byRem, array.length),
            ...array.slice(0, array.length - byRem)
        ];
    };
const $bbd382acdd346c4f$var$shiftl = (by = 1)=>([...array])=>{
        if (array.length === 0) return array;
        const byRem = by % array.length;
        return [
            ...array.slice(array.length - byRem, array.length),
            ...array.slice(0, array.length - byRem)
        ];
    };
const $bbd382acdd346c4f$var$sorter = {
    asc: (left, right)=>{
        if (typeof left !== typeof right) throw new Error(`Sort Error. Left and right elements are not the same type. Left is ${left} and right is ${right}`);
        if (typeof left === "number") return left - right;
        if (typeof left === "boolean") return Number(left) - Number(right);
        if (typeof left === "string") return left.localeCompare(right);
        throw new Error("Unreachable");
    },
    desc: (left, right)=>$bbd382acdd346c4f$var$sorter.asc(left, right) * -1
};
const $bbd382acdd346c4f$var$sort = (fn = $bbd382acdd346c4f$var$sorter.asc, customSort)=>(array)=>customSort ? customSort([
            ...array
        ], fn) : [
            ...array
        ].sort(fn);
const $bbd382acdd346c4f$var$concat = (otherArray)=>(array)=>[
            ...array,
            ...otherArray
        ];
const $bbd382acdd346c4f$var$toObject = (fn = (_, idx)=>idx)=>(array)=>array.map((it, idx)=>({
                [fn(it, idx)]: it
            })).reduce((acc, it)=>({
                ...acc,
                ...it
            }), {});
const $bbd382acdd346c4f$var$fromObject = (fn)=>(object)=>Object.entries(object).map(([key, value])=>[
                fn(key),
                value
            ]).sort(([a], [b])=>a - b).map(([_, it])=>it);
const $bbd382acdd346c4f$var$uniqueBy = (eq)=>(array)=>{
        const out = [];
        for (const elem of array){
            const found = out.some((it)=>eq(it, elem));
            if (!found) out.push(elem);
        }
        return out;
    };
const $bbd382acdd346c4f$var$unique = ()=>(array)=>{
        const out = [];
        for (const elem of array){
            const found = out.some((it)=>it === elem);
            if (!found) out.push(elem);
        }
        return out;
    };
const $bbd382acdd346c4f$var$Arrays = {
    map: $bbd382acdd346c4f$var$map,
    filter: $bbd382acdd346c4f$var$filter,
    find: $bbd382acdd346c4f$var$find,
    some: $bbd382acdd346c4f$var$some,
    every: $bbd382acdd346c4f$var$every,
    sort: $bbd382acdd346c4f$var$sort,
    sorter: $bbd382acdd346c4f$var$sorter,
    append: $bbd382acdd346c4f$var$append,
    debug: $bbd382acdd346c4f$var$debug,
    divBy: $bbd382acdd346c4f$var$divBy,
    divOf: $bbd382acdd346c4f$var$divOf,
    first: $bbd382acdd346c4f$var$first,
    flat: $bbd382acdd346c4f$var$flat,
    flatMap: $bbd382acdd346c4f$var$flatMap,
    foldl: $bbd382acdd346c4f$var$foldl,
    foldr: $bbd382acdd346c4f$var$foldr,
    reduce: $bbd382acdd346c4f$var$reduce,
    reduceRight: $bbd382acdd346c4f$var$reduceRight,
    last: $bbd382acdd346c4f$var$last,
    prepend: $bbd382acdd346c4f$var$prepend,
    join: $bbd382acdd346c4f$var$join,
    reverse: $bbd382acdd346c4f$var$reverse,
    isEmpty: $bbd382acdd346c4f$var$isEmpty,
    sum: $bbd382acdd346c4f$var$sum,
    product: $bbd382acdd346c4f$var$product,
    pow: $bbd382acdd346c4f$var$pow,
    powOf: $bbd382acdd346c4f$var$powOf,
    tuple: $bbd382acdd346c4f$var$tuple,
    fromString: $bbd382acdd346c4f$var$fromString,
    shiftr: $bbd382acdd346c4f$var$shiftr,
    shiftl: $bbd382acdd346c4f$var$shiftl,
    concat: $bbd382acdd346c4f$var$concat,
    unique: $bbd382acdd346c4f$var$unique,
    uniqueBy: $bbd382acdd346c4f$var$uniqueBy,
    between: $bbd382acdd346c4f$var$between,
    betweenEq: $bbd382acdd346c4f$var$betweenEq,
    gt: $bbd382acdd346c4f$var$gt,
    lt: $bbd382acdd346c4f$var$lt,
    gte: $bbd382acdd346c4f$var$gte,
    lte: $bbd382acdd346c4f$var$lte,
    toObject: $bbd382acdd346c4f$var$toObject,
    fromObject: $bbd382acdd346c4f$var$fromObject
};
var $bbd382acdd346c4f$export$2e2bcd8739ae039 = $bbd382acdd346c4f$var$Arrays;


var $1d88f875109511fa$exports = {};

$parcel$defineInteropFlag($1d88f875109511fa$exports);

$parcel$export($1d88f875109511fa$exports, "AsyncResultUnwrapError", () => $1d88f875109511fa$export$26488ec8b94a287d);
$parcel$export($1d88f875109511fa$exports, "AsyncErr", () => $1d88f875109511fa$export$846b91adab566cc);
$parcel$export($1d88f875109511fa$exports, "AsyncOk", () => $1d88f875109511fa$export$c116642f75095b84);
$parcel$export($1d88f875109511fa$exports, "isAsyncOk", () => $1d88f875109511fa$export$99c77b96f7177b2b);
$parcel$export($1d88f875109511fa$exports, "isAsyncErr", () => $1d88f875109511fa$export$12df862902fd97dd);
$parcel$export($1d88f875109511fa$exports, "default", () => $1d88f875109511fa$export$2e2bcd8739ae039);


function $ac8c45f7550aee26$export$f9dcc75fbdda50e4(...fns) {
    return (0, $1d88f875109511fa$export$2e2bcd8739ae039).mapErr((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}




function $3c2c91a818c1fa3c$export$7a7897c5e18506bf(...fns) {
    return (0, $1d88f875109511fa$export$2e2bcd8739ae039).map((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}


class $a204d6a6f7a93484$export$2e2bcd8739ae039 {
    listeners = [];
    done = false;
    once(fn) {
        if (this.done) {
            fn();
            return;
        }
        this.listeners.push(fn);
    }
    fire() {
        this.done = true;
        this.listeners.forEach((fn)=>fn());
        this.listeners = [];
    }
    static nextLoop(fn) {
        const obs = new $a204d6a6f7a93484$export$2e2bcd8739ae039();
        obs.once(fn);
        setTimeout(()=>obs.fire());
        return obs;
    }
}


const $1d88f875109511fa$var$resultTag = Symbol("async-result");
const $1d88f875109511fa$var$errorTag = Symbol("error");
const $1d88f875109511fa$var$okTag = Symbol("ok");
class $1d88f875109511fa$export$26488ec8b94a287d extends Error {
    constructor(uncaught, message){
        super(message);
        this.uncaught = uncaught;
    }
}
const $1d88f875109511fa$export$846b91adab566cc = (error)=>{
    const err = {
        [$1d88f875109511fa$var$resultTag]: {
            done: false,
            observer: (0, $a204d6a6f7a93484$export$2e2bcd8739ae039).nextLoop(()=>{
                err[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = error;
                err[$1d88f875109511fa$var$resultTag].done = true;
            })
        }
    };
    return err;
};
const $1d88f875109511fa$export$c116642f75095b84 = (value)=>{
    const ok = {
        [$1d88f875109511fa$var$resultTag]: {
            done: false,
            observer: (0, $a204d6a6f7a93484$export$2e2bcd8739ae039).nextLoop(()=>{
                ok[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = value;
                ok[$1d88f875109511fa$var$resultTag].done = true;
            })
        }
    };
    return ok;
};
const $1d88f875109511fa$export$99c77b96f7177b2b = ()=>(result)=>{
        if (typeof result !== "object" || !($1d88f875109511fa$var$resultTag in result)) return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
        return new Promise((resolve)=>{
            result[$1d88f875109511fa$var$resultTag].observer.once(()=>{
                const isOk = $1d88f875109511fa$var$okTag in result[$1d88f875109511fa$var$resultTag];
                resolve([
                    isOk,
                    result
                ]);
            });
        });
    };
const $1d88f875109511fa$export$12df862902fd97dd = ()=>(result)=>{
        if (typeof result !== "object" || !($1d88f875109511fa$var$resultTag in result)) return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
        return new Promise((resolve)=>{
            result[$1d88f875109511fa$var$resultTag].observer.once(()=>{
                const isErr = $1d88f875109511fa$var$errorTag in result[$1d88f875109511fa$var$resultTag];
                resolve([
                    isErr,
                    result
                ]);
            });
        });
    };
/**
 * @unsafe
 * @throws
 */ const $1d88f875109511fa$var$unwrap = async (result)=>{
    const [isOk, res] = await $1d88f875109511fa$export$99c77b96f7177b2b()(result);
    if (isOk) return res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag];
    else return Promise.reject(res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag]);
};
/**
 * @unsafe
 * @throws
 */ const $1d88f875109511fa$var$unwrapErr = async (result)=>{
    const [isErr, res] = await $1d88f875109511fa$export$12df862902fd97dd()(result);
    if (isErr) return res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag];
    else return Promise.reject(res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag]);
};
const $1d88f875109511fa$var$getAsyncOk = (ok)=>$1d88f875109511fa$var$unwrap(ok);
const $1d88f875109511fa$var$getAsyncErr = (err)=>$1d88f875109511fa$var$unwrapErr(err);
const $1d88f875109511fa$var$toAsyncResult = (fn)=>{
    const res = {
        [$1d88f875109511fa$var$resultTag]: {
            done: false,
            observer: new (0, $a204d6a6f7a93484$export$2e2bcd8739ae039)()
        }
    };
    fn().then((ok)=>{
        res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = ok;
    }).catch((err)=>{
        res[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = err;
    }).finally(()=>{
        res[$1d88f875109511fa$var$resultTag].done = true;
        res[$1d88f875109511fa$var$resultTag].observer.fire();
    });
    return res;
};
function $1d88f875109511fa$var$map(mapper) {
    return (res)=>{
        const r = res[$1d88f875109511fa$var$resultTag];
        const out = {
            [$1d88f875109511fa$var$resultTag]: {
                done: false,
                observer: new (0, $a204d6a6f7a93484$export$2e2bcd8739ae039)()
            }
        };
        r.observer.once(()=>{
            if ($1d88f875109511fa$var$okTag in r) try {
                const mappedResult = mapper(r[$1d88f875109511fa$var$okTag]);
                if (typeof mappedResult === "object" && $1d88f875109511fa$var$resultTag in mappedResult) mappedResult[$1d88f875109511fa$var$resultTag].observer.once(()=>{
                    if ($1d88f875109511fa$var$okTag in mappedResult[$1d88f875109511fa$var$resultTag]) out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = mappedResult[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag];
                    else out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = mappedResult[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag];
                    out[$1d88f875109511fa$var$resultTag].done = true;
                    out[$1d88f875109511fa$var$resultTag].observer.fire();
                });
                else {
                    out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = mappedResult;
                    out[$1d88f875109511fa$var$resultTag].done = true;
                    out[$1d88f875109511fa$var$resultTag].observer.fire();
                }
            } catch (e) {
                out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = e;
                out[$1d88f875109511fa$var$resultTag].done = true;
                out[$1d88f875109511fa$var$resultTag].observer.fire();
            }
            else {
                out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = r[$1d88f875109511fa$var$errorTag];
                out[$1d88f875109511fa$var$resultTag].done = true;
                out[$1d88f875109511fa$var$resultTag].observer.fire();
            }
        });
        return out;
    };
}
function $1d88f875109511fa$var$mapErr(mapper) {
    return (res)=>{
        const r = res[$1d88f875109511fa$var$resultTag];
        const out = {
            [$1d88f875109511fa$var$resultTag]: {
                done: false,
                observer: new (0, $a204d6a6f7a93484$export$2e2bcd8739ae039)()
            }
        };
        r.observer.once(()=>{
            if ($1d88f875109511fa$var$errorTag in r) try {
                const mappedResult = mapper(r[$1d88f875109511fa$var$errorTag]);
                if (typeof mappedResult === "object" && $1d88f875109511fa$var$resultTag in mappedResult) mappedResult[$1d88f875109511fa$var$resultTag].observer.once(()=>{
                    if ($1d88f875109511fa$var$errorTag in mappedResult[$1d88f875109511fa$var$resultTag]) out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = mappedResult[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag];
                    else out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = mappedResult[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag];
                    out[$1d88f875109511fa$var$resultTag].done = true;
                    out[$1d88f875109511fa$var$resultTag].observer.fire();
                });
                else {
                    out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag] = mappedResult;
                    out[$1d88f875109511fa$var$resultTag].done = true;
                    out[$1d88f875109511fa$var$resultTag].observer.fire();
                }
            } catch (e) {
                out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = r[$1d88f875109511fa$var$okTag];
                out[$1d88f875109511fa$var$resultTag].done = true;
                out[$1d88f875109511fa$var$resultTag].observer.fire();
            }
            else {
                out[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag] = r[$1d88f875109511fa$var$okTag];
                out[$1d88f875109511fa$var$resultTag].done = true;
                out[$1d88f875109511fa$var$resultTag].observer.fire();
            }
        });
        return out;
    };
}
const $1d88f875109511fa$var$merge = ()=>(it)=>new Promise(async (resolve)=>{
            if (await $1d88f875109511fa$export$99c77b96f7177b2b()(it)) it[$1d88f875109511fa$var$resultTag].observer.once(()=>resolve(it[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$okTag]));
            else it[$1d88f875109511fa$var$resultTag].observer.once(()=>resolve(it[$1d88f875109511fa$var$resultTag][$1d88f875109511fa$var$errorTag]));
        });
const $1d88f875109511fa$var$AsyncResults = {
    map: $1d88f875109511fa$var$map,
    mapErr: $1d88f875109511fa$var$mapErr,
    of: $1d88f875109511fa$var$toAsyncResult,
    getAsyncOk: $1d88f875109511fa$var$getAsyncOk,
    getAsyncErr: $1d88f875109511fa$var$getAsyncErr,
    unwrap: $1d88f875109511fa$var$unwrap,
    $: (0, $3c2c91a818c1fa3c$export$7a7897c5e18506bf),
    $AsyncErr: (0, $ac8c45f7550aee26$export$f9dcc75fbdda50e4),
    merge: $1d88f875109511fa$var$merge
};
var $1d88f875109511fa$export$2e2bcd8739ae039 = $1d88f875109511fa$var$AsyncResults;



var $7caa004b08f51646$exports = {};

$parcel$defineInteropFlag($7caa004b08f51646$exports);

$parcel$export($7caa004b08f51646$exports, "Right", () => $7caa004b08f51646$export$19db0165690c701a);
$parcel$export($7caa004b08f51646$exports, "Left", () => $7caa004b08f51646$export$37c4d04eafdc5515);
$parcel$export($7caa004b08f51646$exports, "isRight", () => $7caa004b08f51646$export$a9d71693f0c1a85d);
$parcel$export($7caa004b08f51646$exports, "isLeft", () => $7caa004b08f51646$export$d649b6842e09f2b);
$parcel$export($7caa004b08f51646$exports, "default", () => $7caa004b08f51646$export$2e2bcd8739ae039);


function $0f71992f2471e49d$export$6182890096eb8dab(...fns) {
    return (0, $7caa004b08f51646$export$2e2bcd8739ae039).mapLeft((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}




function $0cd64f57525d12a8$export$d6360122d09ebc1e(...fns) {
    return (0, $7caa004b08f51646$export$2e2bcd8739ae039).mapRight((0, $f070520e7a152c2b$export$2e2bcd8739ae039).$(...fns));
}


const $7caa004b08f51646$var$eitherTag = Symbol("Either");
const $7caa004b08f51646$var$leftTag = Symbol("Left");
const $7caa004b08f51646$var$rightTag = Symbol("Right");
class $7caa004b08f51646$var$ResultUnwrapError extends Error {
    constructor(message){
        super(message);
    }
}
const $7caa004b08f51646$export$19db0165690c701a = (right)=>({
        [$7caa004b08f51646$var$eitherTag]: $7caa004b08f51646$var$rightTag,
        [$7caa004b08f51646$var$rightTag]: right
    });
const $7caa004b08f51646$export$37c4d04eafdc5515 = (left)=>({
        [$7caa004b08f51646$var$eitherTag]: $7caa004b08f51646$var$leftTag,
        [$7caa004b08f51646$var$leftTag]: left
    });
const $7caa004b08f51646$export$a9d71693f0c1a85d = (result)=>$7caa004b08f51646$var$eitherTag in result && result[$7caa004b08f51646$var$eitherTag] === $7caa004b08f51646$var$rightTag;
const $7caa004b08f51646$export$d649b6842e09f2b = (result)=>$7caa004b08f51646$var$eitherTag in result && result[$7caa004b08f51646$var$eitherTag] === $7caa004b08f51646$var$leftTag;
/**
 * @unsafe
 * @throws
 */ const $7caa004b08f51646$var$unwrapRight = ()=>(either)=>$7caa004b08f51646$export$a9d71693f0c1a85d(either) ? either[$7caa004b08f51646$var$rightTag] : (()=>{
            throw new $7caa004b08f51646$var$ResultUnwrapError("Failed to unwrapRight because the given parameter was Either$Left");
        })();
/**
 * @unsafe
 * @throws
 */ const $7caa004b08f51646$var$unwrapLeft = ()=>(result)=>$7caa004b08f51646$export$d649b6842e09f2b(result) ? result[$7caa004b08f51646$var$leftTag] : (()=>{
            throw new $7caa004b08f51646$var$ResultUnwrapError("Failed to unwrapLeft because the given parameter was Either$Right");
        })();
const $7caa004b08f51646$var$getRight = ()=>(right)=>$7caa004b08f51646$var$unwrapRight()(right);
const $7caa004b08f51646$var$getLeft = ()=>(left)=>$7caa004b08f51646$var$unwrapLeft()(left);
function $7caa004b08f51646$var$mapLeft(mapper) {
    return (res)=>{
        if ($7caa004b08f51646$export$d649b6842e09f2b(res)) return $7caa004b08f51646$export$37c4d04eafdc5515(mapper($7caa004b08f51646$var$getLeft()(res)));
        return res;
    };
}
function $7caa004b08f51646$var$mapRight(mapper) {
    return (res)=>{
        if ($7caa004b08f51646$export$a9d71693f0c1a85d(res)) return $7caa004b08f51646$export$19db0165690c701a(mapper($7caa004b08f51646$var$getRight()(res)));
        return res;
    };
}
const $7caa004b08f51646$var$merge = ()=>(either)=>{
        if ($7caa004b08f51646$export$d649b6842e09f2b(either)) return $7caa004b08f51646$var$getLeft()(either);
        else return $7caa004b08f51646$var$getRight()(either);
    };
const $7caa004b08f51646$var$Eithers = {
    unwrapRight: $7caa004b08f51646$var$unwrapRight,
    unwrapLeft: $7caa004b08f51646$var$unwrapLeft,
    getLeft: $7caa004b08f51646$var$getLeft,
    getRight: $7caa004b08f51646$var$getRight,
    mapRight: $7caa004b08f51646$var$mapRight,
    mapLeft: $7caa004b08f51646$var$mapLeft,
    $Left: (0, $0f71992f2471e49d$export$6182890096eb8dab),
    $Right: (0, $0cd64f57525d12a8$export$d6360122d09ebc1e),
    merge: $7caa004b08f51646$var$merge
};
var $7caa004b08f51646$export$2e2bcd8739ae039 = $7caa004b08f51646$var$Eithers;






export {$1d88f875109511fa$export$26488ec8b94a287d as AsyncResultUnwrapError, $1d88f875109511fa$export$846b91adab566cc as AsyncErr, $1d88f875109511fa$export$c116642f75095b84 as AsyncOk, $1d88f875109511fa$export$99c77b96f7177b2b as isAsyncOk, $1d88f875109511fa$export$12df862902fd97dd as isAsyncErr, $d72fb4422786eb14$export$61720c0b3b91cede as ResultUnwrapError, $d72fb4422786eb14$export$3659d3f2d3dfceb8 as Err, $d72fb4422786eb14$export$8146e38189b4f4dc as Ok, $d72fb4422786eb14$export$71a04ee6075aae31 as isOk, $d72fb4422786eb14$export$5edd8010b0a12d92 as isErr, $7caa004b08f51646$export$19db0165690c701a as Right, $7caa004b08f51646$export$37c4d04eafdc5515 as Left, $7caa004b08f51646$export$a9d71693f0c1a85d as isRight, $7caa004b08f51646$export$d649b6842e09f2b as isLeft, $2118e07120e2cddd$export$a97188f46719f5cf as OptionUnwrapError, $2118e07120e2cddd$export$5d7e502287836e58 as isSome, $2118e07120e2cddd$export$e56af863d5645d5f as isNone, $2118e07120e2cddd$export$57ca7e07b341709d as None, $2118e07120e2cddd$export$9f9d0139d032da4f as Some, $f070520e7a152c2b$export$f672e0b6f7222cd7 as compose};
//# sourceMappingURL=index.js.map
