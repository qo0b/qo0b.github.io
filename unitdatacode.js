
window.onload = function() {
	setSelectors();
	populateDropdown();
  // Uses the Chosen jQuery plug-in to make dropdowns nicer.
  $(function() {
    $(".chars").chosen();
    $("#mainSlot").chosen().change(populateMain);
    $("#subSlot").chosen().change(populateSub);
    $(".equips").chosen();
    $("#equipSlot").chosen().change(populateEquip);
    $('.chosen-container').css({width: '200px'});
    $('.chosen-drop').css({minWidth: '100%', width: 'auto'});
	});
}

// on click, refresh table selection

function setSelectors() {
	charSelector = document.querySelectorAll(".chars");
  equipSelector = document.querySelectorAll(".equips");
}

function populateDropdown() {
	try {
    charSelector.forEach((item) => Object.keys(data).map(k => item.insertAdjacentHTML('beforeend', `<option value="${k}">${data[k]["EN Name"]}</option>`)));
    equipSelector.forEach((item) => Object.keys(equipData).map(k => item.insertAdjacentHTML('beforeend', `<option value="${k}">${equipData[k]["EN Name"]}</option>`)));
	} catch(e) {
		return console.error(e)
	}
}

function populateMain() {
  var mainID = data[Number(document.getElementById("mainSlot").value)];

  document.getElementById('mainSlotDevName').textContent = `${mainID["Dev Name"]}`;
  document.getElementById('mainATK80').textContent = `${mainID["ATK"][0]}`;
  document.getElementById('mainATK85').textContent = `${mainID["ATK"][1]}`;
  document.getElementById('mainATK90').textContent = `${mainID["ATK"][2]}`;
  document.getElementById('mainATK95').textContent = `${mainID["ATK"][3]}`;
  document.getElementById('mainATK100').textContent = `${mainID["ATK"][4]}`;
  document.getElementById('mainHP80').textContent = `${mainID["HP"][0]}`;
  document.getElementById('mainHP85').textContent = `${mainID["HP"][1]}`;
  document.getElementById('mainHP90').textContent = `${mainID["HP"][2]}`;
  document.getElementById('mainHP95').textContent = `${mainID["HP"][3]}`;
  document.getElementById('mainHP100').textContent = `${mainID["HP"][4]}`;
}

function populateSub() {
  var subID = data[Number(document.getElementById("subSlot").value)];

  document.getElementById('subSlotDevName').textContent = `${subID["Dev Name"]}`;
  document.getElementById('subATK80').textContent = `${subID["ATK"][0]}`;
  document.getElementById('subATK85').textContent = `${subID["ATK"][1]}`;
  document.getElementById('subATK90').textContent = `${subID["ATK"][2]}`;
  document.getElementById('subATK95').textContent = `${subID["ATK"][3]}`;
  document.getElementById('subATK100').textContent = `${subID["ATK"][4]}`;
  document.getElementById('subHP80').textContent = `${subID["HP"][0]}`;
  document.getElementById('subHP85').textContent = `${subID["HP"][1]}`;
  document.getElementById('subHP90').textContent = `${subID["HP"][2]}`;
  document.getElementById('subHP95').textContent = `${subID["HP"][3]}`;
  document.getElementById('subHP100').textContent = `${subID["HP"][4]}`;
}

function populateEquip() {
  var equipID = equipData[Number(document.getElementById("equipSlot").value)]
  document.getElementById('equipSlotDevName').textContent = `${equipID["Dev Name"]}`;
  document.getElementById('equipATK').textContent = `${equipID["ATK"]}`;
  document.getElementById('equipHP').textContent = `${equipID["HP"]}`;
}