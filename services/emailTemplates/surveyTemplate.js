const keys = require("../../config/keys");
console.log(keys.redirectDomain);
module.exports = (survey) => `
<html>
<body>
<div style="text-align:center;">
<h3>${survey.subject}<h3>
<p>Please complete the following survey</p>
<p>${survey.body}</p>
<div>
<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
</div>
<div>
<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
</div>
</div>
</body>
</html>
`;
