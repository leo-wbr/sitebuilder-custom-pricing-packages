
    const getCustomPackagesRow = document.querySelector('.srspricing>.container>#custom-tier-row');
    const getCustomPackages = Array.from(document.querySelectorAll('.custom-tier-item'));

    const getAdminGeneratedPackage = function (e) {
      const getAdminGeneratedPackageRow = document.querySelector('.container>.row:not(#custom-tier-row)');
      handlePackageSizing(e, getAdminGeneratedPackageRow)
    }

    const handlePackageSizing = function (e, getAdminGeneratedPackageRow) {
      const rules = {
        base() {
          getCustomPackagesRow.style.flexBasis = '90%';
          getCustomPackages.forEach((package) => package.style.flexBasis = '90%')
          getAdminGeneratedPackageRow.style.flexBasis = '100%';
        },
        oneCustomPackage() {
          getCustomPackagesRow.style.flexBasis = '50%';
          getAdminGeneratedPackageRow.style.flexBasis = '50%';
        },
        twoCustomPackages() {
          getCustomPackagesRow.style.flexBasis = '66%';
          getCustomPackages.forEach((package) => package.style.flexBasis = '49%')
          getAdminGeneratedPackageRow.style.flexBasis = '33%';
        },
        threeCustomPackages() {
          getCustomPackagesRow.style.flexBasis = '100%';
          getCustomPackages.forEach((package) => package.style.flexBasis = '32%')
          getAdminGeneratedPackageRow.style.flexBasis = '80%';
        },
      }

      onLoadCustomPackagesPositioning(e, getAdminGeneratedPackageRow, rules)
      onResizeCustomPackagesPositioning(e, getAdminGeneratedPackageRow, rules)
    }

    const ifElsePositioning = function (e, getAdminGeneratedPackageRow, rules) {
      if (e.currentTarget.innerWidth >= 767) {
        if (getCustomPackages.length == 1) {
          rules.oneCustomPackage()
        } else if (getCustomPackages.length == 2) {
          rules.twoCustomPackages()
        } else if (getCustomPackages.length == 3) {
          rules.threeCustomPackages()
        }
      }
      else {
        rules.base()
      }
    }

    const onLoadCustomPackagesPositioning = function (e, getAdminGeneratedPackageRow, rules) {
      ifElsePositioning(e, getAdminGeneratedPackageRow, rules)
    }

    const onResizeCustomPackagesPositioning = function (e, getAdminGeneratedPackageRow, rules) {
      ifElsePositioning(e, getAdminGeneratedPackageRow, rules)

    }

    window.addEventListener('load', getAdminGeneratedPackage);
    window.addEventListener('resize', getAdminGeneratedPackage);

