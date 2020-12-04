import { getToken } from "./Utils/Common";

const authURL = "https://mlp9791.uta.cloud/openemr/apis/api/auth";
const patientURL = "https://mlp9791.uta.cloud/openemr/apis/api/patient";
const facilityURL = "https://mlp9791.uta.cloud/openemr/apis/api/facility";
const mainURL = "https://mlp9791.uta.cloud/openemr/apis/api/";

//======================================================
// Specific functions
export function PostAuth(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(authURL, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getFacilities() {
  //console.log("Get fac active");
  return new Promise((resolve, reject) => {
    fetch(facilityURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken()
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//index MUST BE STRING when combining facilityURL with the index
export function getFacility(index) {
  console.log("Get fac active for " + index);
  return new Promise((resolve, reject) => {
    fetch(facilityURL + "/" + index, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken()
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getAllPatients() {
  console.log("Get patients activated");
  return new Promise((resolve, reject) => {
    fetch(patientURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken()
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
//======================================================

//======================================================
//Universal Functions
//resource param MUST BE STRING, see fetch statement which combines API URL with resource name
export function getAllResource(resource) {
  return new Promise((resolve, reject) => {
    fetch(mainURL + resource, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken()
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//resource & index param MUST BE STRING, see fetch statement which combines API URL with resource name
export function getSpecificResource(resource, index) {
  return new Promise((resolve, reject) => {
    fetch(mainURL + resource + "/" + index, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken()
      }
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function doFetch(method, resource, headers, body) {
  return new Promise((resolve, reject) => {
    fetch(mainURL + resource, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export var ct = { "Content-Type": "application/json" };
export var auth = {
  Authorization:
    sessionStorage.getItem("token_type") + " " + sessionStorage.getItem("token")
};
/*
//=========================================
// TESTING doFetch

export function getContentType(){}

var a = {"Content-Type": "application/json"};
var b = {
  grant_type: "password",
  username: "administrator",
  password: "administrator",
  scope: "default",
  redirectToReferrer: false
};

var c = doFetch("POST", "/auth", a,b).then((result) => {
  
  console.log(result);
});

var d = doFetch("GET",)

*/
/*
function get1(a, b){
  if(a)console.log("a");
  if(b)console.log("b");
  console.log("c");
};
var r = 1; var d = 2;
get1(r,d);
*/

var a4 = "abc";
var a3 = "/o";
console.log(a4 + a3);
