const MONTHS = [
  "January","February","March",
  "April","May","June",
  "July", "August","September",
  "October","November","December"
];

var conferences = [
		{label: 'The Pokémon Company', value: 'the pokémon company'},
		{label: 'Google Stadia', value: 'google stadia'},
		{label: 'Electronic Arts', value: 'electronic arts'},
		{label: 'Microsoft', value: 'microsoft'},
		{label: 'Bethesda', value: 'bethesda'},
		{label: 'Devolver Digital', value: 'devolver digital'},
		{label: 'UploadVR', value: 'uploadvr'},
		{label: 'The PC Gaming Show', value: 'the pc gaming show'},
		{label: 'Limited Run Games', value: 'limited run games'},
		{label: 'Ubisoft', value: 'ubisoft'},
		{label: 'AMD', value: 'amd'},
		{label: 'Kinda Funny Games', value: 'kinda funny games'},
		{label: 'Square Enix', value: 'square enix'},
		{label: 'Nintendo', value: 'nintendo'},
		{label: 'Other', value: 'other'},
];

const platforms = [
  {label: 'Windows', value: 'windows'},
  {label: 'PlayStation 4', value: 'playstation 4'},
  {label: 'Switch', value: 'switch'},
  {label: 'Xbox One', value: 'xbox one'},
  {label: 'MacOS', value: 'macos'},
  {label: 'Stadia', value: 'stadia'},
  {label: 'Mobile', value: 'mobile'},
  {label: 'PSVita', value: 'psvita'},
  {label: 'Linux', value: 'linux'},
];

const days = [
	{label: 'Pre E3', value: 'pre-e3'},
	{label: 'Day 1', value: '1'},
	{label: 'Day 2', value: '2'},
	{label: 'Day 3', value: '3'},
	{label: 'Day 4', value: '4'},
	{label: 'Day 5', value: '5'},
]

const releaseQuarters = [
	{label: 'Q2 2019', value: 'q2 2019'},
	{label: 'Q3 2019', value: 'q3 2019'},
	{label: 'Q4 2019', value: 'q4 2019'},
	{label: 'Q1 2020', value: 'q1 2020'},
	{label: 'Q2 2020', value: 'q2 2020'},
	{label: 'To Be Announced', value: 'To Be Announced'},
];

const exclusivesMisc = [
	{label: 'PlayStation 4', value: 'playstation 4'},
	{label: 'Xbox One', value: 'xbox one'},
	{label: 'PC', value: 'windows'},
  {label: 'Switch', value: 'switch'},
	{label: 'Stadia', value: 'stadia'},
	{label: 'Microsoft', value: 'xbox one'},
	{label: 'Temporary', value: 'timed exclusive'},
	{label: 'Epic Store', value: 'epic exclusive'},
	{label: 'Xbox Play Anywhere', value: 'xbox play anywhere'},
	{label: 'Xbox Game Pass', value: 'xbox game pass'},
];

const vr = [
	{label: 'Oculus Devices Only', value: 'oculus'},
	{label: 'Playstation VR Only', value: 'playstation'},
	{label: 'Coming to all VR', value: 'all'},
]

const isMonth = month =>
  MONTHS.includes(month[0].toUpperCase() + month.substring(1));

const getQuarter = month => {
  const QUARTERS = 4;
  let monthNum = MONTHS.indexOf(month[0].toUpperCase() + month.substring(1));
  return 'Q' + parseInt(monthNum % QUARTERS + 1);
};

const quarterizeDate = date => {
  let dateSplit = date.split(' ');
  switch (dateSplit.length) {
    case 1: //Year
      return 'Q4 ' + date;
    case 2: // Month Year or Quarter Year
      if (isMonth(dateSplit[0]))
        return getQuarter(dateSplit[0]) + ' ' + dateSplit[1];
      else
        return date;
    case 3:// Month Day, Year
      return getQuarter(dateSplit[0]) + ' ' + dateSplit[2];
  }
};

module.exports = {
  conferences,
  platforms,
  days,
  releaseQuarters,
  exclusivesMisc,
  vr,
  quarterizeDate,
};
