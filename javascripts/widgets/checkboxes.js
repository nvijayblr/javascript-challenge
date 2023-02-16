function checkboxes(widget) {
  const cball = widget.querySelectorAll('[kjs-role=checkbox-all]')[0];
  const checkboxes = widget.querySelectorAll('[kjs-role=checkbox]');
  
  function handleCheckboxAllClick(e) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
    });
  }

  function handleCheckboxClick(e) {
    const checkedCount = [...checkboxes].filter(checkbox => checkbox.checked).length;
    cball.indeterminate = false;
    cball.checked = checkedCount;
    if (checkedCount && checkedCount !== checkboxes.length) {
      cball.indeterminate = true;
    }
  }

	let actions = [{
    element: cball,
    event: 'click',
    handler: handleCheckboxAllClick
  }];

  checkboxes.forEach((checkbox) => {
    actions.push({
      element: checkbox,
      event: 'click',
      handler: handleCheckboxClick
    });
  });

  return { actions };
}

module.exports = checkboxes;
