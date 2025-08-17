import React from 'react'

const GenerCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex gap-4 items-center">
      <label className={ `form-control flex items-center gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
        <span className="label-text">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" 
        checked={selectedGender === 'male'} onChange={() => onCheckboxChange('other')   }/>
      </label>

      <label className={`form-control flex items-center gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}` }>
        <span className="label-text">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" 
        checked={selectedGender === 'female'} onChange={() => onCheckboxChange('female')   } />
      </label>

      <label className={`form-control flex items-center gap-2 cursor-pointer ${selectedGender === 'other' ? 'selected' : ''}`}>
        <span className="label-text">Other</span>
        <input type="checkbox" className="checkbox border-slate-900"
        checked={selectedGender === 'other'} onChange={() => onCheckboxChange('other')   }  />
      </label>
    </div>
  )
}

export default GenerCheckbox


/*
starter code for this file
import React from 'react'

const GenerCheckbox = () => {
  return (
    <div className="flex gap-4 items-center">
      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>

      <label className="form-control flex items-center gap-2 cursor-pointer">
        <span className="label-text">Other</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
    </div>
  )
}

export default GenerCheckbox


*/ 